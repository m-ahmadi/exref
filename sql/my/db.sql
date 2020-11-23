CREATE DATABASE [IF NOT EXISTS] db_name [CHARACTER SET charset] [COLLATE collation]; /*
name must be a legal identifier
database must not already exist
you must have privileges to create it
attempt to create a database that already exists results in error
charset/collation of server is used if not specified (first part of collation determines charset if only collation specified)
when creating tables, charset/collation of database is used if not specified
*/

CREATE DATABASE db_name;
CREATE DATABASE IF NOT EXISTS db_name;
CREATE DATABASE mydb CHARACTER SET utf8 COLLATE utf8_icelandic_ci;

DROP DATABASE db_name; -- removes db and all its contents (tables, stored routines, ...)
ALTER DATABASE [db_name] [CHARACTER SET charset] [COLLATE collation]; -- changes database global attributes