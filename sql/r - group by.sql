/*
	GROUP BY clause is used to show summary information about the value of some column.
	The GROUP BY clause follows the WHERE clause in a SELECT statement and precedes the ORDER BY clause.
	The GROUP BY clause allows you to break up SQL results into sets of data. You can get summary information on each set.
	The GRPUP BY list of columns needs to be in the SELECT list of columns.
*/
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- how it works?
-- let's say you were looking for:
-- how many books each publisher has sold?
-- you have to run the following query for each publisher and change the publisher name:
SELECT SUM(book.ytd_sale)
FROM book JOIN publisher USING (pub_id)
WHERE publisher.name = 'Sunshine Publishers';

-- but with GROUP BY, you can do:
SELECT publisher.name, SUM(book.ytd_sales)
FROM book JOIN publisher USING (pub_id)
GROUP BY publisher.name
ORDER BY 1;

-- in short GROUP BY let's you show summary info about each set of rows, not summary about the whole table
-- very simple explanation:
-- it's like you select a bunch of columns first, and then asking to show a summary (aggregate fn) on each column that you selected.
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- another example:
SELECT type, AVG(price)
FROM book
GROUP BY type
ORDER BY 1, 2;

-- without null:
SELECT type, AVG(price)
FROM book
WHERE price IS NOT NULL
GROUP BY type
ORDER BY 1, 2;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- error (list of columns betwwen SELECT and GROUP BY do not match):
SELECT type, price, AVG(price)
FROM book
WHERE price IS NOT NULL
GROUP BY type
ORDER BY 1, 2;
-- PostgreSQL:	ERROR:  column "book.price" must appear in the GROUP BY clause or be used in an aggregate function
-- Oracle:			ORA-00979: not a GROUP BY expression
-- MySQL:				Does not show an error but give inaccurate results for the price column.
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- could you use a GROUP BY without using an aggregate function?
-- yes. the GROUP BY clause works like a DISTINCT then:
SELECT type
FROM book
GROUP BY type
ORDER BY 1;
-- produces the same results as:
SELECT DISTINCT type
FROM book
ORDER BY 1;