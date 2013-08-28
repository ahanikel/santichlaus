module Santi.Persist where

import Santi.Types
import System.IO (openFile, IOMode(ReadMode, AppendMode), hPutStrLn, hGetContents, hClose)
import qualified Data.Map as Map (Map, insert, empty, findWithDefault, differenceWith, toList)
import Data.List (foldl')
import qualified Data.Text as T (Text, pack, unpack)
import qualified Data.Text.Lazy as L (Text, pack, unpack)

saveRegistration :: Registration -> IO ()
saveRegistration r = do
    hReg <- openFile "registrations.txt" AppendMode
    hPutStrLn hReg $ show r
    hClose hReg

bookedTimes :: IO TimeCount
bookedTimes = do
    regs <- registrations
    return $ foldl' insert Map.empty $ regs
    where insert m reg =
            let time = T.unpack $ zeit reg
                count = Map.findWithDefault 0 time m
            in  Map.insert time (count + 1) m

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

registrations :: IO [Registration]
registrations = do
    hReg <- openFile "registrations.txt" ReadMode
    cReg <- hGetContents hReg
    let sReg = lines cReg
    return $ map (read :: String -> Registration) sReg

getRegistrationAsJson :: T.Text -> IO String
getRegistrationAsJson id = do
    let sId = T.unpack id
    rs <- registrations
    let reg = filter (\r -> primaryKey r == sId) rs
    case reg of
        []     -> return $ "\"\""
        [r]    -> return $ show $ JsonRegistration r
        (_:rs) -> return $ show $ JsonRegistration $ last rs
