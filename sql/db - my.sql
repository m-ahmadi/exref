--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
--														create
CREATE DATABASE [IF NOT EXISTS] db_name
[CHARACTER SET charset] [COLLATE collation];
/*
	name must be a legal identifier
	database must not already exist
	you must have privileges to create it
	attempt to create a database that already exists results in error (suppress err with IF NOT EXISTS)
	if not given explicitly, server character set and collation become the database default character set and collation
	if CHARACTER SET is given without COLLATE, the default collation for the character set is used
	if COLLATE is given without CHARACTER SET, the first part of the collation name determines the character set
	character set must be one of those supported by the server

	when you create a new table, if the table definition does not specify its own default character set and collation,
	the database defaults become the table defaults
*/
CREATE DATABASE db_name;

CREATE DATABASE IF NOT EXISTS db_name;

CREATE DATABASE mydb
CHARACTER SET utf8 COLLATE utf8_icelandic_ci;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
--														drop
DROP DATABASE db_name; -- removes the database and all its contents (tables, stored routines, ...)

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
--														alter
-- The ALTER DATABASE statement makes changes to a database’s global attributes
ALTER DATABASE [db_name]
[CHARACTER SET charset] [COLLATE collation];