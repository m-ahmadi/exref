-- USING is a shortcut for ON

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, title
  FROM publisher JOIN book USING (pub_id)
  ORDER BY 1, 2;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, title
  FROM publisher JOIN book USING (pub_id)
  ORDER BY 1, 2;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT publisher.name, book.name
  FROM publisher JOIN book USING (pub_id)
  ORDER BY 1, 2;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, lastname, firstname, city
	FROM publisher JOIN author USING (city);

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT name, title
  FROM publisher JOIN book USING (pub_id)
  WHERE price > 20
  ORDER BY 1, 2;
	
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

SELECT title, lastname, firstname
	FROM book
		JOIN bookauthor USING (ISBN)
		JOIN author USING(author_id)
	ORDER BY 1, 2, 3;

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@