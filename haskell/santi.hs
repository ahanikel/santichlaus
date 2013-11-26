{-# LANGUAGE QuasiQuotes, TemplateHaskell, MultiParamTypeClasses, OverloadedStrings, TypeFamilies #-}

import Santi.Types
import Santi.Persist
import Yesod
import Yesod.Static
import Data.Time (Day, toGregorian)
import Data.Time.Clock
import Data.Text (Text,pack,unpack)
import Control.Applicative ((<$>), (<*>))
import Control.Monad.IO.Class (liftIO)
import Data.String
import Text.Hamlet
import Text.Julius
import Data.UUID as U
import Control.Concurrent (MVar, newMVar, takeMVar, putMVar)
import Control.Exception (bracket)

staticFiles "static"

data Santi = Santi { getStatic   :: Static
                   , getSem      :: MVar Bool
                   }

mkYesod "Santi" [parseRoutes|
/            RootR   GET
/edit/#Text  EditR   GET
/favicon.ico FavR    GET
/reg         RegR    GET POST
/static      StaticR Static     getStatic
/login       LoginR  GET POST
/logout      LogoutR GET
|]

instance Yesod Santi where

    defaultLayout = myLayout

    isAuthorized RegR False = do
        authUser <- lookupSession "authUser"
        case authUser of
            Just "admin" -> return Authorized
            Nothing      -> return $ Unauthorized ""

    isAuthorized _   _     = return Authorized

instance RenderMessage Santi FormMessage where
    renderMessage _ _ = defaultFormMessage

myLayout :: Widget -> Handler Html
myLayout widget = do
    pc <- widgetToPageContent widget
    authUser <- lookupSession "authUser"
    giveUrlRenderer $(hamletFile "layout.hamlet")

printLayout :: Widget -> Handler Html
printLayout widget = do
    pc <- widgetToPageContent widget
    authUser <- lookupSession "authUser"
    giveUrlRenderer $(hamletFile "printlayout.hamlet")

currentYear :: IO String
currentYear = do
    now <- getCurrentTime
    let today = utctDay now
    let (year, _, _) = toGregorian today
    return $ show year

title :: IO String
title = do
    y <- currentYear
    return $ "Santichlaus-Anmeldung " ++ y

getEditR :: Text -> Handler Html
getEditR tId = do
    defaultLayout $ do
        let u = U.fromString $ unpack tId
        sReg <- case u of
                    Just uuid -> liftIO $ getRegistrationAsJson uuid
                    Nothing   -> fail "No such registration"
        let reg = rawJS sReg
        let childkeys = rawJS ckeys
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
        times <- liftIO availableTimes
        $(whamletFile "santi.hamlet")
        toWidget $(juliusFile "santi.js")

getRootR :: Handler Html
getRootR = do
    defaultLayout $ do
        let reg = toJSON ("" :: String)
        let childkeys = rawJS ckeys
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
        times <- liftIO availableTimes
        $(whamletFile "santi.closed.hamlet")
        toWidget $(juliusFile "santi.js")

uuidField :: Monad m => Field m U.UUID
uuidField = Field
    { fieldParse   = \(v:vs) _ -> case (U.fromString $ unpack v) of
                                      uuid@(Just _) -> return $ Right uuid
                                      Nothing       -> return $ Left "Cannot recognize a UUID."
    , fieldView    = undefined
    , fieldEnctype = UrlEncoded
    }

childrenField :: Monad m => Field m [Child]
childrenField = Field
    { fieldParse = \values _ ->
        if values == [] then return $ Right Nothing
        else return $ Right $ Just $ map (read . ("Child " ++) . unpack) values
    , fieldView = undefined
    , fieldEnctype = UrlEncoded
    }

getRegR :: Handler Html
getRegR = printLayout $ do
    registrations <- liftIO getRegistrations
    $(whamletFile "registrations.hamlet")

postRegR :: Handler Html
postRegR = do
        result <- runInputPost $ Registration
            <$> ireq uuidField "uuid"
            <*> ireq textField "name"
            <*> ireq textField "vorname"
            <*> ireq textField "strasse"
            <*> ireq textField "ort"
            <*> ireq textField "telefon"
            <*> ireq textField "email"
            <*> ireq textField "zeit"
            <*> iopt textField "remarks"
            <*> ireq childrenField "children[]"
        sem <- getSem <$> getYesod
        liftIO $ saveRegistration result sem
        defaultLayout [whamlet|<p>#{show result}|]

getLoginR :: Handler Html
getLoginR = defaultLayout [whamlet|
<form method=post action=/login>
    <table>
        <tr>
            <td>Username
            <td><input #username name=username>
        <tr>
            <td>Password
            <td><input #password name=password type=password>
        <tr>
            <td colspan=2><input type=submit name=Login value=Login>
|]

postLoginR :: Handler Html
postLoginR = do
    (user, pass) <- runInputPost $ (,) <$> ireq textField "username" <*> ireq textField "password"
    if user == "admin" && pass == "admin"
    then setSession "authUser" user
    else deleteSession "authUser"
    redirect RootR
 
getLogoutR :: Handler Html
getLogoutR = do
    deleteSession "authUser"
    redirect RootR

getFavR :: Handler ()
getFavR = sendFile "image/png" "static/santi-favicon.png"

main :: IO ()
main = do
    ensureRegistrationIndex
    ensureTimesIndex
    sem <- newMVar True
    static@(Static settings) <- static "static"
    warp 8080 $ Santi static sem

-- vim:ts=4:sw=4:ai:et
