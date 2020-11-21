--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, title
  FROM publisher JOIN book USING (pub_id)
  ORDER BY 1, 2;
	
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, title
  FROM publisher JOIN book
    ON (publisher.pub_id = book.pub_id)
  ORDER BY 1, 2;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, title
  FROM publisher JOIN book
    ON (publisher_id = pub_id)
  ORDER BY 1, 2;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, title
  FROM publisher JOIN book
    ON (publisher.pub_id = book.pub_id)
  ORDER BY 1, 2;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- table aliases

SELECT p.name, b.title
  FROM publisher p JOIN book b
    ON (p.pub_id = b.pub_id)
  ORDER BY 1, 2;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

-- casting
SELECT lastname, firstname, title, zip, ytd_sales
	FROM author JOIN book
		ON (zip = ytd_sales::varchar)
	ORDER BY 1, 2, 3;
	
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@