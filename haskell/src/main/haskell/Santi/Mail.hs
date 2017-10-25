{-# LANGUAGE OverloadedStrings #-}

module Santi.Mail where

import Santi.Types
import Network.Mail.SMTP
import Data.List (intercalate)
import qualified Data.Text as T (Text,intercalate,unpack,append)
import qualified Data.Text.Lazy as L (pack)
import qualified Data.UUID as U

registrationText :: Registration -> String
registrationText r =
	intercalate "\r\n" $
	[ "Santichlaus-Anmeldung"
	, "====================="
	, ""
    	, "http://santichlaus.comebackgloebb.ch/edit/" ++ (U.toString $ primaryKey r)
	, ""
	, "Name:         " ++ T.unpack (name r)
	, "Vorname:      " ++ T.unpack (vorname r)
	, "Strasse / Nr: " ++ T.unpack (strasse r)
	, "PLZ / Ort:    " ++ T.unpack (ort r)
	, "Telefon:      " ++ T.unpack (telefon r)
	, "E-Mail:       " ++ T.unpack (email r)
	, ""
	, "Wir wünschen den Besuch des Santichlauses am 6. Dezember 2017 um"
	, ""
	, "        " ++ T.unpack (zeit r)
	, ""
	, "Uhr."
	, ""
	, "Bemerkungen:"
	, case remarks r of
		Just "\"\"" -> ""
		Just rem -> T.unpack rem
		Nothing -> ""
	, ""
	, ""
	] ++ map stringify (children r)
	where stringify c = intercalate "\r\n" $
		[ "---------------------------------------"
		, T.unpack (childname c) ++ " (" ++ T.unpack (childage c) ++ " Jahre, " ++ T.unpack (childmw c) ++ ")"
		, "---------------------------------------"
		, ""
		, "Zu loben:"
		, T.unpack $ childpos c
		, ""
		, "Zu tadeln:"
		, T.unpack $ childneg c
		, ""
		, ""
		]

confirmationText :: Registration -> String
confirmationText r =
	intercalate "\r\n" $
	[ "Vielen Dank für Ihre Anmeldung!"
	, ""
	, "Dr Santichlaus und dr Schmutzli werden am 6. Dezember um " ++ T.unpack (zeit r) ++ " Uhr bei Ihrer Familie vorbeikommen."
	, ""
	, "Bitte haben Sie Verständnis: der Santichlaus kann Verspätung haben, wenn sein Esel plötzlich bockt, bzw. wenn es (hoffentlich nur ganz kleine)"
	, "Verzögerungen gibt. Bitte informieren Sie uns rechtzeitig über Änderungen Ihrerseits. Bitte vergessen Sie nicht,"
	, "die Gaben für die Kinder am angegebenen Ort rechtzeitig zu hinterlegen."
	, ""
	, "Wir freuen uns jetzt schon auf eine fröhliche Stimmung in Ihrer guten Stube und auf viele grosse Kinderaugen..."
	, "Für weitere Fragen stehen wir gerne zur Verfügung: santichlaus@comebackgloebb.ch"
	, ""
	, "Das OK Santichlaus-Aktion"
	, "Come Back Glöbb Allschwil"
	, ""
	, "PS: Falls Sie Änderungen an Ihrer Anmeldung vornehmen möchten, verwenden Sie bitte diesen Link:"
    	, "http://santichlaus.comebackgloebb.ch/edit/" ++ (U.toString $ primaryKey r)
	, ""
	, ""
	, "Bestätigung Santichlaus-Anmeldung"
	, "=================================="
	, ""
	, "Name:         " ++ T.unpack (name r)
	, "Vorname:      " ++ T.unpack (vorname r)
	, "Strasse / Nr: " ++ T.unpack (strasse r)
	, "PLZ / Ort:    " ++ T.unpack (ort r)
	, "Telefon:      " ++ T.unpack (telefon r)
	, "E-Mail:       " ++ T.unpack (email r)
	, ""
	, "Wir wünschen den Besuch des Santichlauses am 6. Dezember 2017 um"
	, ""
	, "        " ++ T.unpack (zeit r)
	, ""
	, "Uhr."
	, ""
	, "Bemerkungen:"
	, case remarks r of
		Just "\"\"" -> ""
		Just rem -> T.unpack rem
		Nothing -> ""
	, ""
	, ""
	] ++ map stringify (children r)
	where stringify c = intercalate "\r\n" $
		[ "---------------------------------------"
		, T.unpack (childname c) ++ " (" ++ T.unpack (childage c) ++ " Jahre, " ++ T.unpack (childmw c) ++ ")"
		, "---------------------------------------"
		, ""
		, "Zu loben:"
		, T.unpack $ childpos c
		, ""
		, "Zu tadeln:"
		, T.unpack $ childneg c
		, ""
		, ""
		]

sendRegistrationMails :: Registration -> IO ()
sendRegistrationMails r = do
	sendRegistrationMail r
	sendConfirmationMail r

sendRegistrationMail :: Registration -> IO ()
sendRegistrationMail r = do
	let sender	= T.intercalate " " [(vorname r), (name r)]
	let from	= Address (Just sender) "santichlaus@comebackgloebb.ch"
	let to		= [Address (Just "Santichlaus") "santichlaus@comebackgloebb.ch"]
	let cc		= []
	let bcc		= []
	let subject	= T.append "Santichlaus-Anmeldung von " sender
	let body	= plainTextPart $ L.pack $ registrationText r
	let mail	= simpleMail from to cc bcc subject [body]
        sendMail "localhost" mail

sendConfirmationMail :: Registration -> IO ()
sendConfirmationMail r = do
	let sender	= T.intercalate " " [(vorname r), (name r)]
	let from	= Address (Just "Santichlaus") "santichlaus@comebackgloebb.ch"
	let recipient	= T.intercalate " " [(vorname r), (name r)]
	let to		= [Address (Just sender) (email r)]
	let cc		= []
	let bcc		= []
	let subject	= "Bestätigung Santichlaus-Anmeldung"
	let body	= plainTextPart $ L.pack $ confirmationText r
	let mail	= simpleMail from to cc bcc subject [body]
        sendMail "localhost" mail
	
