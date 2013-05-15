{-# LANGUAGE QuasiQuotes, TemplateHaskell, MultiParamTypeClasses, OverloadedStrings, TypeFamilies #-}

import Yesod
import Yesod.Static
import Yesod.Form.Jquery
import Data.Time (Day, toGregorian)
import Data.Time.Clock
import Data.Text (Text)
import Control.Applicative ((<$>), (<*>))
import Control.Monad.IO.Class (liftIO)
import Data.String
import Text.Julius

staticFiles "static"

data Santi = Santi 
    {getStatic :: Static
    }

mkYesod "Santi" [parseRoutes|
/       RootR   GET
/person PersonR POST
/static StaticR Static getStatic
|]

instance Yesod Santi
    where defaultLayout = myLayout

instance RenderMessage Santi FormMessage where
        renderMessage _ _ = defaultFormMessage

instance YesodJquery Santi

myLayout :: GWidget s Santi () -> GHandler s Santi RepHtml
myLayout widget = do
    pc <- widgetToPageContent widget
    hamletToRepHtml [hamlet|
$doctype 5
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>#{pageTitle pc}
        <link type="text/css" rel="stylesheet" media="all" href=@{StaticR defaults_css}>
        <link type="text/css" rel="stylesheet" media="all" href=@{StaticR garland_css}>
        <link type="text/css" rel="stylesheet" media="all" href=@{StaticR santi_css}>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js">
        <script src=@{StaticR jquery_blockUI_js}>
        ^{pageHead pc}
    <body .sidebar-left>
        <div #header-region .clear-block>
        <div #wrapper>
            <div #container .clear-block>
                <div #header>
                    <div #logo-floater>
                        <h1>
                            <a href="http://comebackgloebb.ch/">
                                <img #logo src=@{StaticR garland_logo_png} alt="">
                    <ul .links .primary-links>
                        <li .menu-122 .first>
                            <a href="http://comebackgloebb.ch/content/node/5" title="Willkommen beim Come Back Glöbb Allschwil">Willkommen
                        <li .menu-115 .active-trail>
                            <a href="http://comebackgloebb.ch/content/node" title="Aktuelles rund um den Glöbb">Aktuelles
                        <li .menu-123>
                            <a href="http://comebackgloebb.ch/content/node/6" title="Projekte">Projekte
                        <li .menu-124>
                            <a href="http://comebackgloebb.ch/content/node/7" title="Mitglieder">Mitglieder
                        <li .menu-170 .last>
                            <a href="http://comebackgloebb.ch/content/node/103" title="Archiv">Archiv
                <div #sidebar-left .sidebar>
                    <img src=@{StaticR santichlaus_png}>
                <div #center>
                    <div #squeeze>
                        <djv .right-corner>
                            <div .left-corner>
                                <div .clear-block>
                                    <div #node-393 .node>
                                        <div .content .clear-block>
                                          ^{pageBody pc}
                                    <div .clear-block>
                                        <div .meta>
                <div #footer>
|]

data Person = Person
        { personName :: Text
        , personBirthday :: Day
        , personFavoriteColor :: Maybe Text
        , personEmail :: Text
        , personWebsite :: Maybe Text
        }
    deriving Show

personForm :: Html -> MForm Santi Santi (FormResult Person, Widget)
personForm = renderDivs $ Person
        <$> areq textField "Name" Nothing
        <*> areq (jqueryDayField def
            { jdsChangeYear = True -- give a year dropdown
            , jdsYearRange = "1900:-5" -- 1900 till five years ago
            }) "Birthday" Nothing
        <*> aopt textField "Favorite color" Nothing
        <*> areq emailField "Email address" Nothing
        <*> aopt urlField "Website" Nothing

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

availableTimes :: [String]
availableTimes = [ "17:00"
                 , "17:30"
                 , "18:00"
                 , "18:30"
                 , "19:00"
                 , "19:30"
                 , "20:00"
                 , "20:30"
                 ]

getRootR :: Handler RepHtml
getRootR = do
    defaultLayout $ do
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
        $(whamletFile "santi.hamlet")
        toWidget $(juliusFile "santi.js")

postPersonR :: Handler RepHtml
postPersonR = do
        ((result, widget), enctype) <- runFormPost personForm
        case result of
                FormSuccess person -> defaultLayout [whamlet|<p>#{show person}|]
                _ -> defaultLayout [whamlet|
<p>Invalid input, let's try again.
<form method=post action=@{PersonR} enctype=#{enctype}>
        ^{widget}
        <input type=submit>
|]

main :: IO ()
main = do
    static@(Static settings) <- static "static"
    warpDebug 3000 $ Santi static

-- vim:ts=4:sw=4:ai:et
