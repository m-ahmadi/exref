SELECT title, first_name, last_name
FROM book
	JOIN author_book USING(book_id)
	JOIN author      USING(author_id)
WHERE title = 'Designing Databases';