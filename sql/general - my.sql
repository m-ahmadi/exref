SHOW DATABASES;
SHOW WARNINGS;
SHOW ENGINES;
SHOW CREATE DATABASE db_name;
SHOW CREATE TABLE tbl_name;
SHOW VARIABLES LIKE 'datadir';
USE db_name;
SHOW COLUMNS FROM tbl_name;
DESCRIBE tbl_name | DESC tbl_name
SOURCE filename.sql

SELECT VERSION();
SHOW VARIABLES LIKE "%version%";


-- turn off foreign key constraint (in emergencies you can turn it off for a second)
SET FOREIGN_KEY_CHECKS = 0;
SET FOREIGN_KEY_CHECKS = 1;