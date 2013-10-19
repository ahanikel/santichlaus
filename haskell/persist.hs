module Santi.Persist where

import Santi.Types
import Santi.Mail
import System.IO (readFile, appendFile)
import System.Directory (removeFile, doesDirectoryExist, doesFileExist, createDirectory)
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
import Control.Exception (SomeException, catch)
import Control.Monad (forM_)

dnRegistrations = "registrations"
fnRegistrations = "registrations.txt"
fnTimes         = "times.txt"
dnEmails        = "emails"

saveRegistration :: Registration -> IO ()
saveRegistration r = do
    reg' <- if U.null (uuid r)
            then do
                uuid' <- nextRandom
                return r { uuid = uuid' }
            else return r
    let reg = case (remarks reg') of
              Just r | r == (T.pack "")     -> reg' { remarks = Nothing }
                     | r == (T.pack "\"\"") -> reg' { remarks = Nothing }
              _                             -> reg'
    oldReg <- _getRegistrationByEmail (T.unpack $ email reg)
    case oldReg of
        Nothing -> do
                       _saveRegistration reg
                       sendRegistrationMails reg
        Just o  -> do
                       _deleteRegistration o
                       _saveRegistration reg
                       sendRegistrationMails reg

_filename :: String -> String
_filename = map tr
    where
        tr c = case c of
                   '/' -> '_'
                   _   -> c

_updateRegIndex :: Registration -> IO ()
_updateRegIndex r = do
        writeFile (dnRegistrations ++ "/" ++ _filename (show $ uuid r)) (show r ++ "\n")
        writeFile (dnEmails ++ "/" ++ _filename (T.unpack $ email r)) (_filename (show $ uuid r))

_removeFromRegIndex :: Registration -> IO ()
_removeFromRegIndex r = do
        removeFile (dnEmails ++ "/" ++ _filename (T.unpack $ email r))

_addToTimeIndex :: String -> IO ()
_addToTimeIndex sTime = do
        appendFile fnTimes $ "+" ++ sTime ++ "\n"

_removeFromTimeIndex :: String -> IO ()
_removeFromTimeIndex sTime = do
        appendFile fnTimes $ "-" ++ sTime ++ "\n"

_saveRegistration :: Registration -> IO ()
_saveRegistration r = do
        appendFile fnRegistrations $ "+" ++ show r ++ "\n"
        _addToTimeIndex $ T.unpack $ zeit r
        _updateRegIndex r

_deleteRegistration :: Registration -> IO ()
_deleteRegistration r = do
        appendFile fnRegistrations $ "-" ++ show r ++ "\n"
        _removeFromTimeIndex $ T.unpack $ zeit r
        _removeFromRegIndex r

_times :: IO [String]
_times = do
    ls <- readFile fnTimes
    return $ lines ls

bookedTimes :: IO TimeCount
bookedTimes = do
    times <- _times
    return $ foldl' addTime Map.empty times
    where addTime m line = case op of
                               '+' -> Map.insert time (count + 1) m
                               '-' -> Map.insert time (count - 1) m
                               _   -> m
                           where (op:time) = line
                                 count = Map.findWithDefault 0 time m

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

_getRegistrationByUUID :: String -> IO (Maybe Registration)
_getRegistrationByUUID pk = do
    let fn = dnRegistrations ++ "/" ++ _filename pk
    let ret = do
        sReg <- readFile fn
        let r = read sReg
        return $ Just r
    ret `catch` ((\_ -> return Nothing) :: (SomeException -> IO (Maybe Registration)))

getRegistrationByUUID :: U.UUID -> IO (Maybe Registration)
getRegistrationByUUID = _getRegistrationByUUID . show

_getRegistrationByEmail :: String -> IO (Maybe Registration)
_getRegistrationByEmail e = do
    let fn = dnEmails ++ "/" ++ _filename e
    let ret = do
        sReg <- readFile fn
        _getRegistrationByUUID $ head $ lines sReg
    ret `catch` ((\_ -> return Nothing) :: (SomeException -> IO (Maybe Registration)))

getRegistrationAsJson :: U.UUID -> IO String
getRegistrationAsJson id = do
    reg <- getRegistrationByUUID id
    return $ toString $ encode reg

ensureRegistrationIndex :: IO ()
ensureRegistrationIndex = do
    mustNotRebuild <- doesDirectoryExist dnRegistrations
    if mustNotRebuild
    then return ()
    else do
        createDirectory dnRegistrations
        createDirectory dnEmails
        logs <- readFile fnRegistrations
        forM_ (lines logs) $ \(op:sReg) -> do
            let r = read sReg
            case op of
                '+' -> _updateRegIndex r
                '-' -> _removeFromRegIndex r
                _   -> return ()

ensureTimesIndex :: IO ()
ensureTimesIndex = do
    mustNotRebuild <- doesFileExist fnTimes
    if mustNotRebuild
    then return ()
    else do
        logs <- readFile fnRegistrations
        forM_ (lines logs) $ \(op:sReg) -> do
            let r = read sReg
            case op of
                '+' -> _addToTimeIndex $ T.unpack $ zeit r
                '-' -> _removeFromTimeIndex $ T.unpack $ zeit r
                _   -> return ()
