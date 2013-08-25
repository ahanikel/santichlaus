{-# LANGUAGE QuasiQuotes, TemplateHaskell, MultiParamTypeClasses, OverloadedStrings, TypeFamilies #-}

import Santi.Types
import Santi.Times
import Santi.Mail
import Yesod
import Yesod.Static
import Yesod.Form.Jquery
import Data.Time (Day, toGregorian)
import Data.Time.Clock
import Data.Text (Text,unpack)
import Control.Applicative ((<$>), (<*>))
import Control.Monad.IO.Class (liftIO)
import Data.String
import Text.Hamlet
import Text.Julius

staticFiles "static"

data Santi = Santi { getStatic :: Static }

mkYesod "Santi" [parseRoutes|
/       RootR   GET
/reg    RegR    POST
/static StaticR Static getStatic
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

getRootR :: Handler RepHtml
getRootR = do
    defaultLayout $ do
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
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
        liftIO $ sendRegistrationMail result
        defaultLayout [whamlet|<p>#{show result}|]

main :: IO ()
main = do
    static@(Static settings) <- static "static"
    warpDebug 3000 $ Santi static

-- vim:ts=4:sw=4:ai:et