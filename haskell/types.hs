module Santi.Types where

import Data.Text (Text,unpack)
import qualified Data.Map as Map
import Data.List (intercalate)

data Registration = Registration
        { name      :: Text
        , vorname   :: Text
        , strasse   :: Text
        , ort       :: Text
        , telefon   :: Text
        , email     :: Text
        , zeit      :: Text
        , remarks   :: Maybe Text
        , children  :: [Child]
        }
    deriving (Show, Read)

primaryKey :: Registration -> String
primaryKey = unpack . email

data Child = Child
        { childname :: Text
        , childage  :: Text
        , childmw   :: Text
        , childpos  :: Text
        , childneg  :: Text
        }
    deriving (Show, Read)

type TimeCount = Map.Map String Int

maxTimes :: TimeCount
maxTimes = Map.fromList 	[ ("17:00", 5)
                 		, ("17:30", 5)
                 		, ("18:00", 5)
                 		, ("18:30", 5)
                 		, ("19:00", 5)
                 		, ("19:30", 5)
                 		, ("20:00", 5)
                 		, ("20:30", 5)
                 		]

newtype JsonRegistration = JsonRegistration Registration
	deriving (Read)

instance Show JsonRegistration where
	show (JsonRegistration r) = 
		intercalate "\r\n" $
		[ "{"
		, "  \"name\": \"" ++ unpack (name r) ++ "\","
		, "  \"vorname\": \"" ++ unpack (vorname r) ++ "\","
		, "  \"strasse\": \"" ++ unpack (strasse r) ++ "\","
		, "  \"ort\": \"" ++ unpack (ort r) ++ "\","
		, "  \"telefon\": \"" ++ unpack (telefon r) ++ "\","
		, "  \"email\": \"" ++ unpack (email r) ++ "\","
		, "  \"zeit\": \"" ++ unpack (zeit r) ++ "\","
		, "  \"remarks\": \"" ++ rem ++ "\","
		, "  \"children\": \"" ++ clds ++ "\","
		, "}"
		]
		where rem = case remarks r of
			Just t -> unpack t
			Nothing -> ""
		      clds = "[ " ++ (intercalate ",\r\n" $ map cld (children r)) ++ " ]"
		      cld c = intercalate "\r\n  " $
		              [ "{"
		              , "  \"childname\": \"" ++ unpack (childname c) ++ "\","
		              , "  \"childage\": \"" ++ unpack (childage c) ++ "\","
		              , "  \"childmw\": \"" ++ unpack (childmw c) ++ "\","
		              , "  \"childpos\": \"" ++ unpack (childpos c) ++ "\","
		              , "  \"childneg\": \"" ++ unpack (childneg c) ++ "\","
		              , "}"
			      ]
