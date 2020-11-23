-- order of processing
SELECT name, title, price, advance          -- 4
  FROM publisher JOIN book USING (pub_id)   -- 1
  WHERE price > 10 AND advance > 10000      -- 2
  ORDER BY 1, 2;                            -- 3

-- cannot join on columns with different types
-- error: JOIN/USING types numeric and character varying cannot be matched
-- types of columns should be same
-- or cast one to match the other
SELECT ... ON (zip = ytd_sales::varchar)
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- inner join with ON
	
SELECT name, title FROM publisher JOIN book USING (pub_id)                      ORDER BY 1, 2;
SELECT name, title FROM publisher JOIN book ON (publisher.pub_id = book.pub_id) ORDER BY 1, 2;
SELECT name, title FROM publisher JOIN book ON (publisher_id = pub_id)          ORDER BY 1, 2;
SELECT name, title FROM publisher JOIN book ON (publisher.pub_id = book.pub_id) ORDER BY 1, 2;

-- table aliases
SELECT p.name, b.title FROM publisher p JOIN book b ON (p.pub_id = b.pub_id) ORDER BY 1, 2;
	
-- casting
SELECT lastname, firstname, title, zip, ytd_sales FROM author JOIN book ON (zip = ytd_sales::varchar) ORDER BY 1, 2, 3;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- inner join with USING
-- USING is a shortcut for ON

SELECT name, title FROM publisher JOIN book USING (pub_id) ORDER BY 1, 2;
SELECT name, title FROM publisher JOIN book USING (pub_id) ORDER BY 1, 2;
SELECT publisher.name, book.name FROM publisher JOIN book USING (pub_id) ORDER BY 1, 2;
SELECT name, lastname, firstname, city FROM publisher JOIN author USING (city);
SELECT name, title FROM publisher JOIN book USING (pub_id) WHERE price > 20 ORDER BY 1, 2;
	
SELECT title, lastname, firstname
	FROM book
		JOIN bookauthor USING (ISBN)
		JOIN author USING(author_id)
ORDER BY 1, 2, 3;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@