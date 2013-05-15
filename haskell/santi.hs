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
import Text.Hamlet
import Text.Julius

staticFiles "static"

data Santi = Santi 
    {getStatic :: Static
    }

mkYesod "Santi" [parseRoutes|
/       RootR   GET
/person PersonR POST
/reg    RegR    POST
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
    hamletToRepHtml $(hamletFile "layout.hamlet")

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
availableTimes = [ ""
                 , "17:00"
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

postRegR :: Handler RepHtml
postRegR = undefined

main :: IO ()
main = do
    static@(Static settings) <- static "static"
    warpDebug 3000 $ Santi static

-- vim:ts=4:sw=4:ai:et
