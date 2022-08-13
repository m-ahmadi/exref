CREATE TABLE table_name (
	col1  SERIAL PRIMARY KEY,
	col2  VARCHAR(40) NOT NULL,
	col3  DATE
);
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- auto increment col

CREATE TABLE table_name (colname SMALLSERIAL|SERIAL|BIGSERIAL); 
-- not true types but a notational convenience (similar to AUTO_INCREMENT in other dmbs)
CREATE TABLE tblname (colname SERIAL);
-- equals to:
CREATE SEQUENCE tblname_colname_seq;
CREATE TABLE tblname ( colname integer NOT NULL DEFAULT nextval('tblname_colname_seq') );
ALTER SEQUENCE tblname_colname_seq OWNED BY tblname.colname;
-- an integer column that its default value comes from a sequence generator
-- NOT NULL constraint ensures null value never inserted
-- best to add UNIQUE or PRIMARY KEY constraint to prevent duplicates being inserted by accident
-- sequence is marked "owned by" the column, so it drops if column or table is dropped
-- https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL

-- reset auto increment counter
ALTER SEQUENCE tbl_col_seq RESTART WITH 1;

TRUNCATE tbl RESTART IDENTITY [CASCADE]; -- also deletes all rows

setval('tbl_col_seq', 1);
select pg_get_serial_sequence('tbl', 'col'); -- get sequence name
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- mysql
CREATE TABLE t1 (col1 INT NOT NULL PRIMARY KEY AUTO_INCREMENT);
CREATE TABLE IF NOT EXISTS db.tbl_name (
	col_1 INT NOT NULL AUTO_INCREMENT,
	col_2 VARCHAR(45) NULL,
	col_3 INT NULL,
	PRIMARY KEY (col_1)
) ENGINE = InnoDB;