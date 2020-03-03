SELECT column1, column2, ...
FROM table_name;

SELECT CustomerName, City FROM Customers;

SELECT * FROM tbl;		-- refers to a table in the default (current) database
SELECT * FROM db.tbl;
-- If no database has been selected, you cannot refer to a table without specifying a database qualifier