-- postgres
SELECT * FROM weather;
SELECT city, temp_lo, temp_hi, prcp, date FROM weather;
SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather;

# mysql

SELECT column1, column2, ...
FROM table_name;

SELECT CustomerName, City FROM Customers;

SELECT * FROM tbl;		# refers to a table in the default (current) database
SELECT * FROM db.tbl;
# if no database has been selected, you cannot refer to a table without specifying a database qualifier

USE db_name;                          # set current db to `db_name`
SELECT * FROM tbl_name;               # look in current db (`db_name`), since no db was specified
SELECT * FROM another_db.another_tbl; # look in `another_db`
USE another_db;                       # set current db to `another_db`
SELECT * FROM another_tbl;            # look in current db (`another_db`), since no db was specified