module Santi.Types where

import Data.Text (Text,unpack)
import qualified Data.Map as Map

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

