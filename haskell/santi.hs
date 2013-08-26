{-# LANGUAGE QuasiQuotes, TemplateHaskell, MultiParamTypeClasses, OverloadedStrings, TypeFamilies #-}

import Santi.Types
import Santi.Mail
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

staticFiles "static"

data Santi = Santi { getStatic :: Static }

mkYesod "Santi" [parseRoutes|
/            RootR   GET
/edit/#Text  EditR   GET
/favicon.ico FavR    GET
/reg         RegR    POST
/static      StaticR Static getStatic
|]

instance Yesod Santi where
    defaultLayout = myLayout

instance RenderMessage Santi FormMessage where
    renderMessage _ _ = defaultFormMessage

instance YesodJquery Santi

myLayout :: GWidget s Santi () -> GHandler s Santi RepHtml
myLayout widget = do
    pc <- widgetToPageContent widget
    hamletToRepHtml $(hamletFile "layout.hamlet")

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

getEditR :: Text -> Handler RepHtml
getEditR tId = do
    defaultLayout $ do
        sReg <- liftIO $ getRegistrationAsJson tId
        let reg = rawJS sReg
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
        times <- liftIO availableTimes
        $(whamletFile "santi.hamlet")
        toWidget $(juliusFile "santi.js")

getRootR :: Handler RepHtml
getRootR = do
    defaultLayout $ do
        let reg = toJSON ("" :: String)
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
        times <- liftIO availableTimes
        $(whamletFile "santi.hamlet")
        toWidget $(juliusFile "santi.js")

childrenField :: Field sub master [Child]
childrenField = Field
    { fieldParse = \values _ ->
        if values == [] then return $ Right Nothing
        else return $ Right $ Just $ map (read . ("Child " ++) . unpack) values
    , fieldView = undefined
    , fieldEnctype = UrlEncoded
    }

postRegR :: Handler RepHtml
postRegR = do
        result <- runInputPost $ Registration
            <$> ireq textField "name"
            <*> ireq textField "vorname"
            <*> ireq textField "strasse"
            <*> ireq textField "ort"
            <*> ireq textField "telefon"
            <*> ireq textField "email"
            <*> ireq textField "zeit"
            <*> iopt textField "remarks"
            <*> ireq childrenField "children[]"
        liftIO $ saveRegistration result
        liftIO $ sendRegistrationMails result
        defaultLayout [whamlet|<p>#{show result}|]

getFavR :: Handler ()
getFavR = sendFile "image/png" "static/santi-favicon.png"

main :: IO ()
main = do
    static@(Static settings) <- static "static"
    warpDebug 3000 $ Santi static

-- vim:ts=4:sw=4:ai:et
