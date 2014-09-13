module Santi.Persist ( saveRegistration
                     , getRegistrationAsJson
                     , availableTimes
                     , bookedTimes
                     , blockedTimes
                     , ensureFilesPresent
                     , ensureRegistrationIndex
                     , ensureTimesIndex
                     , getRegistrations
                     ) where

import           Santi.Types
import           Santi.Mail
import           System.IO                         (readFile, appendFile, openFile, IOMode(..), hClose)
import           System.Directory                  (removeFile, doesDirectoryExist, doesFileExist, createDirectory, getDirectoryContents)
import qualified Data.Map                   as Map (Map, insert, empty, findWithDefault, differenceWith, toList)
import           Data.List                         (foldl')
import qualified Data.Text                  as T   (Text, pack, unpack)
import qualified Data.Text.Lazy             as L   (Text, pack, unpack)
import           Data.Aeson
import qualified Data.ByteString.Lazy       as B
import           Data.ByteString.Lazy.UTF8         (toString)
import qualified Data.UUID                  as U
import           Data.UUID.V4
import           Control.Exception                 (bracket, SomeException, catch)
import           Control.Monad                     (forM_, mapM_, when, unless)
import           Control.Concurrent                (MVar, takeMVar, putMVar)
import           Prelude hiding (catch)

dnRegistrations = "registrations"
fnRegistrations = "registrations.txt"
fnTimes         = "times.txt"
dnEmails        = "emails"
fnBlocked       = "blocked.txt"

saveRegistration :: Registration -> MVar Bool -> IO ()
saveRegistration r sem = do
    (oldReg, reg') <- if U.null (uuid r)
                      then do
                          uuid' <- nextRandom
                          let r' = r { uuid = uuid' }
                          return (Nothing, r)
                      else do
                          oldReg <- getRegistrationByUUID $ uuid r
                          return (oldReg, r)
    let reg = case (remarks reg') of
              Just r | r == (T.pack "")     -> reg' { remarks = Nothing }
                     | r == (T.pack "\"\"") -> reg' { remarks = Nothing }
              _                             -> reg'
    case oldReg of
        Nothing -> do
                       _saveRegistration reg sem
                       -- sendRegistrationMails reg
        Just o  -> do
                       _deleteRegistration o sem
                       _saveRegistration reg sem
                       -- sendRegistrationMails reg

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

_saveRegistration :: Registration -> MVar Bool -> IO ()
_saveRegistration r sem = do
        bracket (takeMVar sem)
                (\_ -> putMVar sem True)
                (\_ -> do
                    appendFile fnRegistrations $ "+" ++ show r ++ "\n"
                    _addToTimeIndex $ T.unpack $ zeit r)
        _updateRegIndex r

_deleteRegistration :: Registration -> MVar Bool -> IO ()
_deleteRegistration r sem = do
        bracket (takeMVar sem)
                (\_ -> putMVar sem True)
                (\_ -> do
                    appendFile fnRegistrations $ "-" ++ show r ++ "\n"
                    _removeFromTimeIndex $ T.unpack $ zeit r)
        _removeFromRegIndex r

_countTimes :: FilePath -> IO TimeCount
_countTimes filename = do
    times <- fmap lines $ readFile filename
    return $ foldl' addTime Map.empty times
    where addTime m line = case op of
                               '+' -> Map.insert time (count + 1) m
                               '-' -> Map.insert time (count - 1) m
                               _   -> m
                           where (op:time) = line
                                 count = Map.findWithDefault 0 time m

blockTime :: String -> MVar Bool -> IO ()
blockTime t sem = do
    bracket (takeMVar sem)
            (\_ -> putMVar sem True)
            (\_ -> blockTime' t)
    where blockTime' t = do
              isBlocked <- isTimeBlocked t
              unless isBlocked $ appendFile fnBlocked $ "+" ++ t ++ "\n"

unblockTime :: String -> MVar Bool -> IO ()
unblockTime t sem = do
    bracket (takeMVar sem)
            (\_ -> putMVar sem True)
            (\_ -> unblockTime' t)
    where unblockTime' t = do
              isBlocked <- isTimeBlocked t
              when isBlocked $ appendFile fnBlocked $ "-" ++ t ++ "\n"

bookedTimes = _countTimes fnTimes

blockedTimes = _countTimes fnBlocked

isTimeBlocked :: String -> IO Bool
isTimeBlocked t = do
    blocked <- blockedTimes
    return $ Map.findWithDefault 0 t blocked > 0

isTimeAvailable :: String -> IO Bool
isTimeAvailable t = do
    let max = Map.findWithDefault 0 t maxTimes
    booked <- bookedTimes
    let current = Map.findWithDefault 0 t booked
    isBlocked <- isTimeBlocked t
    return $ not isBlocked && (max - current) > 0

availableTimes :: IO [String]
availableTimes = do
    booked <- bookedTimes
    blocked <- blockedTimes
    let diffFn a b =
          if diff <= 0 then Nothing
          else Just a 
          where diff = a - b
    let available = Map.differenceWith diffFn maxTimes booked
    let isBlocked t = Map.findWithDefault 0 t blocked > 0
    return $ filter (not . isBlocked) [ time | (time,_) <- Map.toList available]

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

getRegistrations :: IO [Maybe Registration]
getRegistrations = do
    files <- getDirectoryContents dnEmails
    let emails = filter (\p -> p /= "." && p /= "..") files
    mapM _getRegistrationByEmail emails

ensureFilesPresent :: IO ()
ensureFilesPresent = do
    mapM_ checkAndCreate [fnRegistrations, fnBlocked]
    where checkAndCreate file = do
            exists <- doesFileExist file
            unless exists $ openFile file WriteMode >>= hClose


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
