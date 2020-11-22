SELECT		cols / *
FROM			tablename
	JOIN		anothertable
		USING(colname)
WHERE ___ = ___ OR ___ AND ___
ORDER BY	colname
ORDER BY	colname DESC
ORDER BY	colname ASC, colname DESC
LIMIT 4

SELECT * FROM tbl;		-- default db
SELECT * FROM db.tbl; -- specific db
SELECT col1, col2, ... FROM table_name;


-- col alias
SELECT title AS book_title FROM book; -- pg
SELECT title "Book Title" FROM book;  -- ...
SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather; -- pg
SELECT username AS asghar FROM user;  -- my

-- table alias (pg)
SELECT p.name, b.title FROM publisher p JOIN book b ON (p.pub_id = b.pub_id) ORDER BY 1, 2;  (in FORM clause, )
	-- usually in FROM clause
	-- when in FROM clause, they can go anywhere (even in SELECT before the FROM)


-- concat to colname (pg)
SELECT 'Publisher: ' || name || ' is based in ' || city || ', ' || state FROM publisher;
SELECT 'Publisher: ' || name || ' is based in ' || city || ', ' || state "My Heading" FROM publisher;
SELECT 'Average price is: ' || AVG(price) FROM book;

SELECT first_name, last_name, address, city, country
FROM customer
	JOIN address   USING(address_id)
    JOIN city    USING(city_id)
    JOIN country USING(country_id)
WHERE country = 'United States'
ORDER BY first_name ASC
LIMIT 5


INSERT INTO table_name (col1, col2, col3) VALUES (val1, val2, val3);
INSERT INTO table_name (a,b,c) VALUES (1,2,3), (4,5,6), (7,8,9);  -- multiple rows
INSERT INTO tableName(id) SELECT * FROM generate_series(1, 1000); -- insert in loop (pg)

DELETE FROM orders WHERE id_users = 1 AND id_product = 2 LIMIT 1;


UPDATE table_name SET column1=value1, column2=value2 WHERE condition;
UPDATE Customers SET ContactName='Alfred Schmidt', City='Frankfurt' WHERE CustomerID=1;
UPDATE Customers SET ContactName='Juan' WHERE Country='Mexico';
UPDATE Customers SET ContactName='Juan'; -- updates all record if WHERE clause is omitted

-- update a table with a value from another
UPDATE tbl_1, tbl_2 SET tbl_1.col=tbl_2.col WHERE  tbl_1.col=tbl_2.col;

-- mysql
USE db_name;  -- set current db