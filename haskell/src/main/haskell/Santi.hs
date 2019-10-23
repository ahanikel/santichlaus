{-# LANGUAGE QuasiQuotes, TemplateHaskell, MultiParamTypeClasses, OverloadedStrings, TypeFamilies, ViewPatterns #-}

module Santi (main) where

import Santi.Types
import Santi.Persist
import Santi.Privileges
import Santi.Users
import Yesod
import Yesod.Static
import Data.Time (Day, toGregorian)
import Data.Time.Clock
import Data.Text (Text,pack,unpack)
import qualified Data.Text.Encoding as TE
import Control.Applicative ((<$>), (<*>))
import Control.Monad (guard)
import Control.Monad.IO.Class (liftIO)
import qualified Data.ByteString as BS
import qualified Data.ByteString.Lazy as BL
import Data.String
import Text.Hamlet
import Text.Julius
import Data.UUID as U
import Control.Concurrent (MVar, newMVar, takeMVar, putMVar)
import Control.Exception (bracket, tryJust)
import Yesod.Auth
import Yesod.Auth.OAuth2 (getAccessToken, getUserResponseJSON)
import Yesod.Auth.OAuth2.Prelude (AccessToken (..))
import Yesod.Auth.OAuth2.Google
import Network.HTTP.Conduit (Manager, tlsManagerSettings, newManager)
import Data.Aeson (encode)
import Network.HTTP.Types (status200, status302, status400)
import Network.Wai (isSecure, rawPathInfo, responseLBS)
import Network.Wai.Handler.Warp (defaultSettings, setPort, setHTTP2Disabled)
import Network.Wai.Handler.WarpTLS (OnInsecure(..), onInsecure, runTLS, tlsSettings)
import Text.Blaze.Html (preEscapedToMarkup)
import System.IO.Error (isDoesNotExistError)
import System.Environment (getEnv)


staticFiles "static"

data Santi = Santi { getStatic :: Static
                   , getSem :: MVar Bool
                   , httpManager :: Manager
                   , clientId :: BS.ByteString
                   , clientSecret :: BS.ByteString
                   , appRoot :: Text
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

    approot       = ApprootMaster appRoot

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
    type AuthId Santi  = Text

    authenticate creds = do
      $logInfo $ "Plugin: " <> credsPlugin creds
      case credsPlugin creds of
        "google" -> do
          let Just (AccessToken token) = getAccessToken creds
          $logInfo "Got access token"
          setSession "_GOOGLE_ACCESS_TOKEN" token
          case getUserResponseJSON creds :: Either String GoogleUser of
            Right user -> return $ Authenticated $ guEmail user
            Left  err  -> return $ ServerError   $ pack err

    loginDest  _       = RootR
    logoutDest _       = RootR

    authPlugins self   =
      [ oauth2GoogleScoped ["email", "profile"]
                           (TE.decodeUtf8 $ clientId self)
                           (TE.decodeUtf8 $ clientSecret self)
      ]

    maybeAuthId = lookupSession "_ID"

myLayout :: Widget -> Handler Html
myLayout widget = do
    pc <- widgetToPageContent widget
    maid <- maybeAuthId
    withUrlRenderer $(hamletFile "layout.hamlet")

printLayout :: Widget -> Handler Html
printLayout widget = do
    pc <- widgetToPageContent widget
    maid <- maybeAuthId
    withUrlRenderer $(hamletFile "printlayout.hamlet")

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

getRootR :: Handler Html
getRootR = do
    defaultLayout $ withJQuery $ do
        let reg = toJSON ("" :: String)
        let childkeys = rawJS ckeys
        year <- liftIO currentYear
        t <- liftIO title
        setTitle $ toHtml t
        times <- liftIO availableTimes
        if times /= [] then do
          $(whamletFile "santi.hamlet")
          toWidget $(juliusFile "santi.js")
        else
          $(whamletFile "santi.closed.hamlet")

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
    sem                      <- newMVar True
    static@(Static settings) <- static "static"
    manager                  <- newManager tlsManagerSettings
    let warpSettings          = setPort 8080 $ setHTTP2Disabled defaultSettings
        warpTlsSettings       = (tlsSettings "server.crt" "server.key")
                                { onInsecure = AllowInsecure }
    clientId                 <- BS.readFile "google.clientId"
    clientSecret             <- BS.readFile "google.clientSecret"
    approot'                 <- tryJust (guard . isDoesNotExistError) (getEnv "APPROOT")
    let approot               = either (const "https://santichlaus.comebackgloebb.ch") pack approot'
    app                      <- toWaiApp $ Santi static sem manager clientId clientSecret approot
    runTLS warpTlsSettings warpSettings (redirectHttp (TE.encodeUtf8 approot) app)

redirectHttp :: BS.ByteString -> Application -> Application
redirectHttp _       app req resp | isSecure req = app req resp
redirectHttp appRoot _   req resp                = resp $ responseLBS status302
                                                   [ ("Location", BS.concat
                                                       [ appRoot
                                                       , rawPathInfo req
                                                       ]
                                                     )
                                                   ]
                                                   BL.empty

-- vim:ts=4:sw=4:ai:et
