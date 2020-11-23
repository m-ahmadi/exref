-- show all authors of a book (book has many authors)
SELECT title, first_name, last_name
FROM book
	JOIN author_book USING(book_id)
	JOIN author      USING(author_id)
WHERE title = 'Designing Databases';

-- show all books of author (author has many books)
SELECT title, first_name, last_name
FROM book
	JOIN author_book USING(book_id)
	JOIN author      USING(author_id)
WHERE first_name = 'Jordan' AND last_name = 'Winters';
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- example postgress
CREATE TABLE book (
  book_id SERIAL PRIMARY KEY NOT NULL,
  title      VARCHAR(45) NULL,
  pub_date   DATE NULL,
  last_price DECIMAL(10,2) NULL
);
CREATE TABLE author (
  author_id  SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(45) NULL,
  last_name  VARCHAR(45) NULL,
  email      VARCHAR(45) NULL
);
CREATE TABLE author_book (
  author_id INT NOT NULL,
  book_id   INT NOT NULL,
	CONSTRAINT author_id FOREIGN KEY (author_id) REFERENCES author (author_id)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	CONSTRAINT book_id FOREIGN KEY (book_id) REFERENCES book (book_id)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
);
-- note: if table has CONSTRAINT, then parent row must be inserted first
INSERT INTO book VALUES
	(1145, 'Designing Databases', '2012-3-1', 45.00),
	(1146, 'SQLite Made Simple', '2012-4-11', 39.95),
	(1147, 'Pocket Guide to SQL', '2012-5-21', 19.95);
INSERT INTO author VALUES
	(445, 'Tucker', 'Morrison', 'tucker@'),
	(446, 'Robert', 'Allen', 'rob@'),
	(447, 'Jordan', 'Winters', 'jw@');
INSERT INTO author_book VALUES -- if constrained, this can't be before aboves
	(447, 1145),
	(445, 1145),
	(446, 1146),
	(447, 1147);
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- another example
select * from eyes;
select * from person;
select name, age, color, vision from person join eyes using(eyes_id);

CREATE TABLE eyes (
  eyes_id   SERIAL NOT NULL,
  person_id INT NULL,
  color     VARCHAR(45) NULL,
  vision    INT NULL,
  PRIMARY KEY (eyes_id)
);
CREATE TABLE person (
  person_id SERIAL NOT NULL,
  name      VARCHAR(45) NULL,
  age       INT NULL,
  eyes_id   INT NULL,
  PRIMARY KEY (person_id),
  CONSTRAINT eyes_id FOREIGN KEY (eyes_id) REFERENCES eyes (eyes_id)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
);

INSERT INTO eyes VALUES
	(1,1,'red',12),
	(2,2,'green',16),
	(3,3,'blue',14),
	(4,4,'brown',17),
	(5,5,'black',11);
INSERT INTO person VALUES
	(1,'mohammad',27,1),
	(2,'saeed',28,2),
	(3,'farhad',27,3),
	(4,'mohsen',34,4),
	(5,'tooraj',29,5);
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@