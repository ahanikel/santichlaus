{-# LANGUAGE QuasiQuotes, TemplateHaskell, MultiParamTypeClasses, OverloadedStrings, TypeFamilies #-}

import Santi.Types
import Santi.Persist
import Santi.Privileges
import Santi.Users
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
import Yesod.Auth
import Yesod.Auth.BrowserId
import Network.HTTP.Conduit (Manager, conduitManagerSettings, newManager)
import Data.Aeson (encode)
import Network.HTTP.Types (status200, status400)
import Network.Wai (responseLBS)
import Text.Blaze.Html (preEscapedToMarkup)


staticFiles "static"

data Santi = Santi { getStatic :: Static
                   , getSem :: MVar Bool
                   , httpManager :: Manager
                   }

mkYesod "Santi" [parseRoutes|
/            RootR   GET
/edit/#Text  EditR   GET
/favicon.ico FavR    GET
/reg         RegR    GET POST
/print/reg   PrintRegR GET
/reg.json    RegJsonR GET
/static      StaticR Static getStatic
/auth        AuthR   Auth   getAuth
|]

instance Yesod Santi where

    defaultLayout = myLayout
    approot = ApprootStatic "http://santichlaus.comebackgloebb.ch"

    isAuthorized RegR False = do
        authUser <- maybeAuthId
        case authUser of
            Just userName | userName `has` Read `On` Registrations
                          -> return Authorized
            _             -> return $ Unauthorized ""

    isAuthorized PrintRegR False = isAuthorized RegR False
    isAuthorized RegJsonR False  = isAuthorized RegR False

    isAuthorized _   _     = return Authorized

instance RenderMessage Santi FormMessage where
    renderMessage _ _ = defaultFormMessage

instance YesodAuth Santi where
    type AuthId Santi = Text
    getAuthId = return . Just . credsIdent

    loginDest  _ = RootR
    logoutDest _ = RootR

    authPlugins _ =
        [ authBrowserId def
        ]

    authHttpManager = httpManager

    maybeAuthId = lookupSession "_ID"

myLayout :: Widget -> Handler Html
myLayout widget = do
    pc <- widgetToPageContent widget
    maid <- maybeAuthId
    giveUrlRenderer $(hamletFile "layout.hamlet")

printLayout :: Widget -> Handler Html
printLayout widget = do
    pc <- widgetToPageContent widget
    maid <- maybeAuthId
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

withJQuery :: Widget -> Widget
withJQuery widget = do
    toWidgetHead [hamlet|
                    <script src=//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js>
                    <script src=@{StaticR jquery_blockUI_js}>
                 |]
    widget

withAngularController :: String -> Widget -> Widget
withAngularController controller widget = do
    [whamlet|
        <div ng-app=santiApp>
            <div ng-controller=#{controller}>
                ^{widget}
    |]
    toWidgetHead [hamlet|
        <script src=//ajax.googleapis.com/ajax/libs/angularjs/1.2.24/angular.min.js>
        <script src=@{StaticR controllers_js}>
    |]

getEditR :: Text -> Handler Html
getEditR tId = do
    defaultLayout $ withJQuery $ do
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

getRootR = getRootRClosed

getRootROpen :: Handler Html
getRootROpen = do
    defaultLayout $ withJQuery $ do
        let reg = toJSON ("" :: String)
        let childkeys = rawJS ckeys
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
        times <- liftIO availableTimes
        $(whamletFile "santi.hamlet")
        toWidget $(juliusFile "santi.js")

getRootRClosed :: Handler Html
getRootRClosed = defaultLayout $(whamletFile "santi.closed.hamlet")

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

getPrintRegR :: Handler Html
getPrintRegR = printLayout $ do
    registrations <- liftIO getRegistrations
    $(whamletFile "registrations.hamlet")

getRegJsonR :: Handler ()
getRegJsonR = do
    registrations <- liftIO getRegistrations
    sendWaiResponse $ responseLBS
        status200
        [("Content-Type", "application/json")]
        $ encode registrations

getRegR :: Handler Html
getRegR = defaultLayout $ withAngularController "RegistrationsController" $ do
    [whamlet|
        <table>
            <tr>
                <th ng-repeat="col in ['zeit', 'name', 'vorname', 'strasse', 'ort']">{{col}}
            <tr ng-repeat="reg in registrations">
                <td>{{reg.zeit}}
                <td>{{reg.name}}
                <td>{{reg.vorname}}
                <td>{{reg.strasse}}
                <td>{{reg.ort}}
    |]

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
    ensureFilesPresent
    ensureRegistrationIndex
    ensureTimesIndex
    sem <- newMVar True
    static@(Static settings) <- static "static"
    manager <- newManager conduitManagerSettings
    warp 80 $ Santi static sem manager

-- vim:ts=4:sw=4:ai:et
