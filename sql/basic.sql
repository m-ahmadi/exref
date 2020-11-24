SELECT col1, col2, ... | *
FROM tblname JOIN tblname USING(col)
WHERE col = val OR ... AND ... IN ... BETWEEN ... LIKE
ORDER BY col |  ORDER BY col DESC  |  ORDER BY col1 ASC, col2 DESC
LIMIT 4;

SELECT * FROM tbl;     -- default db
SELECT * FROM db.tbl;  -- specific db
SELECT * FROM "order"; -- conflicting table name with reserved words
SELECT col1, col2, ... FROM table_name;

-- col alias
SELECT title AS book_title FROM book;
SELECT title "Book Title" FROM book;
SELECT city, (temp_hi+temp_lo)/2 AS temp_avg, date FROM weather;

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

-- where
SELECT * FROM weather WHERE city = 'San Francisco' AND prcp > 0.0;


INSERT INTO tblname VALUES (val1, val2, val3);                    -- default cols
INSERT INTO tblname (col1, col2, col3) VALUES (val1, val2, val3); -- specific cols
INSERT INTO tblname (a,b,c) VALUES (1,2,3), (4,5,6), (7,8,9);     -- multiple rows
INSERT INTO tblname VALUES (DEFAULT, 2, 3);                       -- auto increment col
INSERT INTO tblname(id) SELECT * FROM generate_series(1, 1000);   -- insert in loop (pg)

DELETE FROM orders WHERE id_users = 1 AND id_product = 2 LIMIT 1;

UPDATE tblname SET column1=value1, column2=value2 WHERE condition;
UPDATE Customers SET ContactName='Alfred Schmidt', City='Frankfurt' WHERE CustomerID=1;
UPDATE Customers SET ContactName='Juan' WHERE Country='Mexico';
UPDATE Customers SET ContactName='Juan'; -- without WHERE all rows are updated
-- update a table with a value from another
UPDATE tbl_1, tbl_2 SET tbl_1.col=tbl_2.col WHERE  tbl_1.col=tbl_2.col;