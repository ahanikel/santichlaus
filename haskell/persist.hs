module Santi.Persist where

import Santi.Types
import System.IO (openFile, IOMode(ReadMode, AppendMode), hPutStrLn, hGetContents, hClose)
import qualified Data.Map as Map (Map, insert, empty, findWithDefault, differenceWith, toList)
import Data.List (foldl')
import qualified Data.Text as T (unpack)

saveRegistration :: Registration -> IO ()
saveRegistration r = do
	hReg <- openFile "registrations.txt" AppendMode
	hTimes <- openFile "times.txt" AppendMode
	hPutStrLn hReg $ show r
	hPutStrLn hTimes $ T.unpack $ zeit r
	hClose hTimes
	hClose hReg

bookedTimes :: IO TimeCount
bookedTimes = do
	hTimes <- openFile "times.txt" ReadMode
	contents <- hGetContents hTimes
	return $ foldl' insert Map.empty $ lines contents
	where insert m line =
		let count = Map.findWithDefault 0 line m
		in Map.insert line (count + 1) m

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
