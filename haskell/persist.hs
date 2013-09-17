module Santi.Persist where

import Santi.Types
import System.IO (openFile, IOMode(ReadMode, AppendMode), hPutStrLn, hGetContents, hClose)
import qualified Data.Map as Map (Map, insert, empty, findWithDefault, differenceWith, toList)
import Data.List (foldl')
import qualified Data.Text as T (Text, pack, unpack)
import qualified Data.Text.Lazy as L (Text, pack, unpack)
import Data.Aeson
import qualified Data.ByteString.Lazy as B
import Data.ByteString.Lazy.UTF8 (toString)
import Control.Exception.Base (bracket)
import Control.Exception (evaluate)

fnRegistrations = "registrations.txt"
fnRegDeletions  = "registrations.del.txt"


saveRegistration :: Registration -> IO ()
saveRegistration r = do
    oldReg <- getRegistration (primaryKey r)
    case oldReg of
        Nothing -> _saveRegistration r
        Just o  -> do
                       _deleteRegistration o
                       _saveRegistration r

_saveRegistration :: Registration -> IO ()
_saveRegistration r = do
    bracket
        (openFile fnRegistrations AppendMode)
        (hClose)
        (\hReg -> hPutStrLn hReg $ show r)

_deleteRegistration :: Registration -> IO ()
_deleteRegistration r = do
    bracket
        (openFile fnRegDeletions AppendMode)
        (hClose)
        (\hReg -> hPutStrLn hReg $ show r)

registrations :: IO [Registration]
registrations = bracket
        (openFile fnRegistrations ReadMode)
        (hClose)
        (\hReg -> do
            cReg <- hGetContents hReg
            let ret = map (read :: String -> Registration) $ lines cReg
            evaluate $ length ret -- TODO: hack until we know how to do better
            return ret
        )

deletions :: IO [Registration]
deletions = do
    bracket
        (openFile fnRegDeletions ReadMode)
        (hClose)
        (\hReg -> do
            cReg <- hGetContents hReg
            let ret = map (read :: String -> Registration) $ lines cReg
            evaluate $ length ret -- TODO: hack until we know how to do better
            return ret
        )

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

getRegistration :: String -> IO (Maybe Registration)
getRegistration pk = do
    rs <- registrations
    let reg = filter (\r -> primaryKey r == pk) rs
    case reg of
        []     -> return Nothing
        [r]    -> return $ Just r
        (_:rs) -> return $ Just $ last rs

getRegistrationAsJson :: T.Text -> IO String
getRegistrationAsJson id = do
    let sId = T.unpack id
    rs <-  registrations
    reg <- getRegistration sId
    case reg of
        Nothing -> return $ "\"\""
        Just r  -> return $ toString $ encode r
