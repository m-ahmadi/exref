UPDATE table_name
SET column1 = value1,
	column2 = value2
WHERE condition;

UPDATE Customers
SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
WHERE CustomerID = 1;

UPDATE Customers
SET ContactName='Juan'
WHERE Country='Mexico';

-- ALL records will be updated if WHERE clause is omitted.
UPDATE Customers
SET ContactName='Juan';