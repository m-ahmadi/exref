-- postgres
-- insert in loop
INSERT INTO tableName(id) SELECT * FROM generate_series(1, 1000);

# mysql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');

# inerting multiple rows
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