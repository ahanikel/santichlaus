module Santi.Persist where

import Santi.Types
import Santi.Mail
import System.IO (readFile, appendFile)
import qualified Data.Map as Map (Map, insert, empty, findWithDefault, differenceWith, toList)
import Data.List (foldl')
import qualified Data.Text as T (Text, pack, unpack)
import qualified Data.Text.Lazy as L (Text, pack, unpack)
import Data.Aeson
import qualified Data.ByteString.Lazy as B
import Data.ByteString.Lazy.UTF8 (toString)
import Control.Exception.Base (bracket)
import Control.Exception (evaluate)
import qualified Data.UUID as U
import Data.UUID.V4

fnRegistrations = "registrations.txt"
fnRegDeletions  = "registrations.del.txt"

saveRegistration :: Registration -> IO ()
saveRegistration r = do
    reg <- if U.null (uuid r)
              then do
                  uuid' <- nextRandom
                  return r { uuid = uuid' }
              else return r
    oldReg <- getRegistrationByEmail (email reg)
    case oldReg of
        Nothing -> do
                       _saveRegistration reg
                       sendRegistrationMails reg
        Just o  -> do
                       _deleteRegistration o
                       _saveRegistration reg
                       sendRegistrationMails reg

_saveRegistration :: Registration -> IO ()
_saveRegistration r = do
        appendFile fnRegistrations (show r ++ "\n")

_deleteRegistration :: Registration -> IO ()
_deleteRegistration r = do
        appendFile fnRegDeletions (show r ++ "\n")

registrations :: IO [Registration]
registrations = do
        cReg <- readFile fnRegistrations
        return $ map (read :: String -> Registration) $ lines cReg

deletions :: IO [Registration]
deletions = do
        cReg <- readFile fnRegDeletions
        return $ map (read :: String -> Registration) $ lines cReg

bookedTimes :: IO TimeCount
bookedTimes = do
    regs <- registrations
    dels <- deletions
    let madd = foldl' addTime Map.empty $ regs
    return $ foldl' subTime madd $ dels
    where insert f m reg =
            let time = T.unpack $ zeit reg
                count = Map.findWithDefault 0 time m
            in  Map.insert time (f count) m
          addTime = insert (+ 1)
          subTime = insert $ \i -> i - 1

isTimeAvailable :: String -> IO Bool
isTimeAvailable t = do
    let max = Map.findWithDefault 0 t maxTimes
    booked <- bookedTimes
    let current = Map.findWithDefault 0 t booked
    return $ (max - current) > 0

availableTimes :: IO [String]
availableTimes = do
    booked <- bookedTimes
    let diffFn a b =
          if diff <= 0 then Nothing
          else Just a 
          where diff = a - b
    let available = Map.differenceWith diffFn maxTimes booked
    return [ time | (time,_) <- Map.toList available]

getRegistrationByEmail :: T.Text -> IO (Maybe Registration)
getRegistrationByEmail pk = do
    rs <- registrations
    let reg = filter (\r -> email r == pk) rs
    case reg of
        []     -> return Nothing
        [r]    -> return $ Just r
        (_:rs) -> return $ Just $ last rs

getRegistrationByUUID :: U.UUID -> IO (Maybe Registration)
getRegistrationByUUID pk = do
    rs <- registrations
    let reg = filter (\r -> uuid r == pk) rs
    case reg of
        []     -> return Nothing
        [r]    -> return $ Just r
        (_:rs) -> return $ Just $ last rs

getRegistrationAsJson :: U.UUID -> IO String
getRegistrationAsJson id = do
    reg <- getRegistrationByUUID id
    case reg of
        Nothing -> return $ "\"\""
        Just r  -> return $ toString $ encode r
