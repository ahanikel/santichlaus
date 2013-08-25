{-# LANGUAGE OverloadedStrings #-}

module Santi.Mail where

import Santi.Types
import Network.Mail.SMTP
import Data.List (intercalate)
import qualified Data.Text as T (Text,intercalate,pack,unpack,append)
import qualified Data.Text.Lazy as L (pack)

toPlainText :: Registration -> String
toPlainText r =
	intercalate "\r\n" $
	[ "Santichlaus-Anmeldung"
	, "====================="
	, ""
	, "Name:         " ++ T.unpack (name r)
	, "Vorname:      " ++ T.unpack (vorname r)
	, "Strasse / Nr: " ++ T.unpack (strasse r)
	, "PLZ / Ort:    " ++ T.unpack (ort r)
	, "Telefon:      " ++ T.unpack (telefon r)
	, "E-Mail:       " ++ T.unpack (email r)
	, ""
	, "Wir wünschen den Besuch des Santichlauses am 6. Dezember 2013 um"
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
		, T.unpack (childname c) ++ "(" ++ T.unpack (childage c) ++ " Jahre, " ++ T.unpack (childmw c) ++ ")"
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

sendRegistrationMail :: Registration -> IO ()
sendRegistrationMail r = do
	let sender	= T.intercalate " " [(vorname r), (name r)]
	let from	= Address (Just sender) (email r)
	--let to		= [Address (Just "Santichlaus") "santichlaus@comebackgloebb.ch"]
	let to		= [Address (Just "Santichlaus") "qah@bluewin.ch"]
	let cc		= []
	let bcc		= []
	let subject	= T.append "Santichlaus-Anmeldung von " sender
	let body	= plainTextPart $ L.pack $ toPlainText r
	let mail	= simpleMail from to cc bcc subject [body]
        sendMail "smtp.gmail.com" mail

