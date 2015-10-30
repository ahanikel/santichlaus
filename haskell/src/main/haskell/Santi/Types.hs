{-# LANGUAGE OverloadedStrings #-}

module Santi.Types where

import Data.Text (Text,unpack,pack)
import qualified Data.Map as Map
import Data.List (intercalate)
import Data.Aeson
import Control.Applicative
import Control.Monad
import qualified Data.UUID as U

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
                        , ("17:00", 5)
                        , ("17:30", 5)
                        , ("18:00", 5)
                        , ("18:30", 5)
                        , ("19:00", 5)
                        , ("19:30", 5)
                        ]

instance FromJSON U.UUID where
    parseJSON (String v) = return $ case uuid' of
                                        Just u -> u
                                        Nothing -> U.nil
                           where uuid' = U.fromString $ unpack v
    parseJSON _ = mzero

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

