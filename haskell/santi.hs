{-# LANGUAGE QuasiQuotes, TemplateHaskell, MultiParamTypeClasses, OverloadedStrings, TypeFamilies #-}

import Santi.Types
import Santi.Persist
import Yesod
import Yesod.Static
import Yesod.Form.Jquery
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

data Santi = Santi { getStatic :: Static
                   , getSem :: MVar Bool
                   }

mkYesod "Santi" [parseRoutes|
/            RootR   GET
/edit/#Text  EditR   GET
/favicon.ico FavR    GET
/reg         RegR    GET POST
/static      StaticR Static getStatic
|]

instance Yesod Santi where
    defaultLayout = myLayout

instance RenderMessage Santi FormMessage where
    renderMessage _ _ = defaultFormMessage

instance YesodJquery Santi

--myLayout :: GWidget s Santi () -> GHandler s Santi Html
myLayout :: Widget -> Handler Html
myLayout widget = do
    pc <- widgetToPageContent widget
    giveUrlRenderer $(hamletFile "layout.hamlet")

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
        $(whamletFile "santi.hamlet")
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
getRegR = defaultLayout $ do
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
