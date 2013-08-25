module Santi.Types where

import Data.Text (Text)

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

data Child = Child
        { childname :: Text
        , childage  :: Text
        , childmw   :: Text
        , childpos  :: Text
        , childneg  :: Text
        }
    deriving (Show, Read)

