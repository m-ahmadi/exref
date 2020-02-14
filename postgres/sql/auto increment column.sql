-- use a SMALLSERIAL, SERIAL or BIGSERIAL data type

CREATE TABLE table_name (
	col_id    SERIAL PRIMARY KEY,
	col1      VARCHAR(40) NOT NULL,
	col2      DATE
);
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	The data types smallserial, serial and bigserial are not true types,
	but merely a notational convenience for creating unique identifier columns (similar to the AUTO_INCREMENT property supported by some other databases)
	
	In the current implementation, specifying:
*/
CREATE TABLE tablename (
    colname SERIAL
);

-- is equivalent to specifying:

CREATE SEQUENCE tablename_colname_seq;
CREATE TABLE tablename (
    colname integer NOT NULL DEFAULT nextval('tablename_colname_seq')
);
ALTER SEQUENCE tablename_colname_seq OWNED BY tablename.colname;

-- Thus, we have created an integer column and arranged for its default values to be assigned from a sequence generator.
-- A NOT NULL constraint is applied to ensure that a null value cannot be inserted.
-- In most cases you would also want to attach a UNIQUE or PRIMARY KEY constraint to prevent duplicate values from being inserted by accident, but this is not automatic.
-- Lastly, the sequence is marked as "owned by" the column, so that it will be dropped if the column or table is dropped.

-- https://www.postgresql.org/docs/current/datatype-numeric.html#DATATYPE-SERIAL

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- reset auto increment counter
ALTER SEQUENCE product_id_seq RESTART WITH 1453;