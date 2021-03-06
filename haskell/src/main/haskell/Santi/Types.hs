{-# LANGUAGE OverloadedStrings #-}

module Santi.Types where

import Data.Text (Text,unpack,pack)
import qualified Data.Map as Map
import Data.List (intercalate)
import Data.Aeson
import Control.Applicative
import Control.Monad
import qualified Data.UUID as U
import Data.Time.Clock

data Registration = Registration
        { uuid      :: U.UUID
        , name      :: Text
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

primaryKey :: Registration -> U.UUID
primaryKey = uuid

data Child = Child
        { childname :: Text
        , childage  :: Text
        , childmw   :: Text
        , childpos  :: Text
        , childneg  :: Text
        }
    deriving (Show, Read)

-- we need this because the JSON object does not
-- preserve the order of the keys
ckeys = "[\"childname\", \"childage\", \"childmw\", \"childpos\", \"childneg\"]"

type TimeCount = Map.Map String Int

maxTimes :: TimeCount
maxTimes = Map.fromList [ ("16:00", 2)
                        , ("16:30", 2)
                        , ("17:00", 4)
                        , ("17:30", 4)
                        , ("18:00", 4)
                        , ("18:30", 4)
                        , ("19:00", 4)
                        ]

data GoogleUser = GoogleUser { guName  :: Text
                             , guEmail :: Text
                             }

instance FromJSON Registration where
    parseJSON (Object v) = Registration  <$>
                           v .: "uuid" <*>
                           v .: "name" <*>
                           v .: "vorname" <*>
                           v .: "strasse" <*>
                           v .: "ort" <*>
                           v .: "telefon" <*>
                           v .: "email" <*>
                           v .: "zeit" <*>
                           v .: "remarks" <*>
                           v .: "children"
    parseJSON _ = mzero

instance ToJSON Registration where
    toJSON r = object
        [ "uuid"     .= U.toString (uuid r)
        , "name"     .= name r
        , "vorname"  .= vorname r
        , "strasse"  .= strasse r
        , "ort"      .= ort r
        , "telefon"  .= telefon r
        , "email"    .= email r
        , "zeit"     .= zeit r
        , "remarks"  .= rem
        , "children" .= children r
        ]
        where rem = case remarks r of
                        Just t -> t
                        Nothing -> ""

instance FromJSON Child where
    parseJSON (Object v) = Child <$>
                           v .: "childname" <*>
                           v .: "childage" <*>
                           v .: "childmw" <*>
                           v .: "childpos" <*>
                           v .: "childneg"
    parseJSON _ = mzero

instance ToJSON Child where
    toJSON c = object
        [ "childname" .= childname c
        , "childage"  .= childage c
        , "childmw"   .= childmw c
        , "childpos"  .= childpos c
        , "childneg"  .= childneg c
        ]

instance FromJSON GoogleUser where
    parseJSON (Object v) = GoogleUser <$> v .: "name" <*> v .: "email"
    parseJSON _          = mzero

--
-- Time management (WIP)
--

type Tours = [Tour]

data Tour = Tour
  { tourId    :: Int
  , tourChlaus    :: Text
  , tourSchmutzli :: Text
  , tourSlots     :: TimeSlot
  }

type TimeSlots = [TimeSlot]

data TimeSlot =
  ReservedTimeSlot
  { tsTourId     :: Int
  , tsStart      :: UTCTime
  , tsEnd        :: UTCTime
  }
  | FreeTimeSlot
  { tsTourId     :: Int
  , tsStart      :: UTCTime
  , tsEnd        :: UTCTime
  }

minute = secondsToDiffTime 60

timePerChild = 10 * minute
timeToTravel = 10 * minute

findTimeSlot :: TimeSlots -> NominalDiffTime -> TimeSlots
findTimeSlot = undefined
