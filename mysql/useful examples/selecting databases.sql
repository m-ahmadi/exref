/*
	The USE statement selects a database to make it the default (current) database for a given connection to the server.
	You can issue USE statements as much as you want to switch between databases.
	Selecting a database doesn't limit you to using tables only from that database.
	While one database is the default, you can refer to tables in other databases,
	by qualifying their names with the appropriate database identifier.
	
	When you disconnect from the server, it doesn't hold the information about what db was the default db,
	If you connect to server again, it doesn’t remember what database you had selected previously.
*/
USE db_name;								-- set current db to `db_name`
SELECT * FROM tbl_name;						-- look in current db (`db_name`), since no db was specified
SELECT * FROM another_db.another_tbl;		-- look in `another_db`
USE another_db;								-- set current db to `another_db`
SELECT * FROM another_tbl;					-- look in current db (`another_db`), since no db was specified
-- You must have some access privilege for the database or you cannot select it.