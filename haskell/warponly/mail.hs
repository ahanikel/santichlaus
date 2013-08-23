{-# LANGUAGE OverloadedStrings #-}

--module Santichlaus.Mail where

import Network.Mail.SMTP
import Data.List (intercalate)
import qualified Data.Text as T (pack)
import qualified Data.Text.Lazy as L (pack)


--main = sendMail "smtp.host.com" mail

main = putStrLn $
	toPlainText $
		RegistrationMailHeader "Name" "Vorname" "Strasse Nr" "PLZ Ort" "Telefon" "bla@bla.com" "17:30" "keine"


data RegistrationMail = RegistrationMail
	{ header :: RegistrationMailHeader
	, body   :: [RegistrationMailBody]
	}

data RegistrationMailHeader = RegistrationMailHeader
	{ name		:: String
	, firstname	:: String
	, address	:: String
	, location	:: String
	, phone		:: String
	, email		:: String
	, time		:: String
	, remarks	:: String
	}

data RegistrationMailBody = RegistrationMailBody
	{ childname	:: String
	, childage	:: String
	, childmw	:: String
	, childpos	:: String
	, childneg	:: String
	}

toPlainText :: RegistrationMailHeader -> String
toPlainText h =
	intercalate "\r\n" $
	[ "Santichlaus-Anmeldung"
	, "====================="
	, ""
	, "Name:         " ++ (name h)
	, "Vorname:      " ++ (firstname h)
	, "Strasse / Nr: " ++ (address h)
	, "PLZ / Ort:    " ++ (location h)
	, "Telefon:      " ++ (phone h)
	, "E-Mail:       " ++ (email h)
	, ""
	, "Wir wünschen den Besuch des Santichlauses am 6. Dezember 2012 um"
	, ""
	, "        " ++ time h
	, ""
	, "Uhr."
	, ""
	, "Bemerkungen:"
	, remarks h
	, ""
	, ""
	]

sendRegistrationMail :: RegistrationMail -> IO ()
sendRegistrationMail r = do
	let h		= header r
	let sender	= firstname h ++ " " ++ name h
	let from	= Address (Just $ T.pack sender) (T.pack $ email h)
	let to		= [Address (Just "Santichlaus") "santichlaus@comebackgloebb.ch"]
	let cc		= []
	let bcc		= []
	let subject	= "Santichlaus-Anmeldung von " ++ sender
	let body	= plainTextPart $ L.pack $ toPlainText h
	let mail	= simpleMail from to cc bcc (T.pack subject) [body]
	return ()

