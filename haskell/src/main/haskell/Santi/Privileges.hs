module Santi.Privileges ( Privilege(..)
                        , Section(..)
                        , Permission(..)
                        ) where

data Privilege = Create
               | Read
               | Modify
               | Delete

data Section = Registrations

data Permission = On Privilege Section

-- vim:set ts=4 ai et sw=4:
