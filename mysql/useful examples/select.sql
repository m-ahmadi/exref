SELECT column1, column2, ...
FROM table_name;

SELECT CustomerName, City FROM Customers;

SELECT * FROM tbl;		-- refers to a table in the default (current) database
SELECT * FROM db.tbl;
-- If no database has been selected, you cannot refer to a table without specifying a database qualifier



--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- inerting multiple rows
INSERT INTO table_name
	(a,b,c)
VALUES
	(1,2,3),
	(4,5,6),
	(7,8,9);

INSERT INTO table_name
	(column1,column2,column3,column4)
VALUES
	('value1' , 'value2', 'value3','value4'),
	('value1' , 'value2', 'value3','value4'),
	('value1' , 'value2', 'value3','value4');
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@