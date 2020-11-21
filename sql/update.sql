
-- -----------------------------------------------
-- mysql

UPDATE table_name SET column1 = value1, column2 = value2 WHERE condition;
UPDATE Customers SET ContactName = 'Alfred Schmidt', City= 'Frankfurt' WHERE CustomerID = 1;
UPDATE Customers SET ContactName='Juan' WHERE Country='Mexico';
UPDATE Customers SET ContactName='Juan'; -- updates all record if WHERE clause is omitted

-- update a table with a value from another
UPDATE tbl_1, tbl_2
SET    tbl_1.col =  tbl_2.col
WHERE  tbl_1.col =  tbl_2.col;