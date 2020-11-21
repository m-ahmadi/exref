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
  title VARCHAR(45) NULL,
  pub_date DATE NULL,
  last_price DECIMAL(10,2) NULL
);

CREATE TABLE author (
  author_id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  email VARCHAR(45) NULL
);

CREATE TABLE author_book (
  author_id INT2 NOT NULL,
  book_id INT2 NOT NULL
);

INSERT INTO book (book_id, title, pub_date , last_price) VALUES (1145, 'Designing Databases', '2012-3-1', 45.00);
INSERT INTO book (book_id, title, pub_date, last_price) VALUES (1146, 'SQLite Made Simple', '2012-4-11', 39.95);
INSERT INTO book (book_id, title, pub_date, last_price) VALUES (1147, 'Pocket Guide to SQL', '2012-5-21', 19.95);

INSERT INTO author (author_id, first_name, last_name, email) VALUES (445, 'Tucker', 'Morrison', 'tucker@');
INSERT INTO author (author_id, first_name, last_name, email) VALUES (446, 'Robert', 'Allen', 'rob@');
INSERT INTO author (author_id, first_name, last_name, email) VALUES (447, 'Jordan', 'Winters', 'jw@');

INSERT INTO author_book (author_id , book_id ) VALUES (447, 1145);
INSERT INTO author_book (author_id , book_id ) VALUES (445, 1145);
INSERT INTO author_book (author_id , book_id ) VALUES (446, 1146);
INSERT INTO author_book (author_id , book_id ) VALUES (447, 1147);

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- example mysql
CREATE TABLE book (
	book_id    INT NOT NULL AUTO_INCREMENT,
	title      VARCHAR(45) NULL,
	pub_date   DATE NULL,
	last_price DECIMAL(10,2) NULL,
	PRIMARY KEY (book_id)
) ENGINE = InnoDB;

CREATE TABLE author (
	author_id   INT NOT NULL AUTO_INCREMENT,
	first_name  VARCHAR(45) NULL,
	last_name   VARCHAR(45) NULL,
	email       VARCHAR(45) NULL,
	PRIMARY KEY (author_id)
) ENGINE = InnoDB;

CREATE TABLE author_book (
	author_id INT NOT NULL,
	book_id   INT NOT NULL,
	INDEX book_id_idx (book_id ASC) VISIBLE,
	CONSTRAINT author_id
		FOREIGN KEY (author_id)
		REFERENCES author (author_id)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION,
	CONSTRAINT book_id
		FOREIGN KEY (book_id)
		REFERENCES book (book_id)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION
) ENGINE = InnoDB;

INSERT INTO book (book_id,title,pub_date,last_price) VALUES (1145,'Designing Databases','2012-3-1',45.00);
INSERT INTO book (book_id,title,pub_date,last_price) VALUES (1146,'SQLite Made Simple','2012-4-11',39.95);
INSERT INTO book (book_id,title,pub_date,last_price) VALUES (1147,'Pocket Guide to SQL','2012-5-21',19.95);

INSERT INTO author (author_id,first_name,last_name,email) VALUES (445,'Tucker','Morrison','tucker@');
INSERT INTO author (author_id,first_name,last_name,email) VALUES (446,'Robert','Allen','rob@');
INSERT INTO author (author_id,first_name,last_name,email) VALUES (447,'Jordan','Winters','jw@');

INSERT INTO author_book (author_id,book_id) VALUES (447,1145);
INSERT INTO author_book (author_id,book_id) VALUES (445,1145);
INSERT INTO author_book (author_id,book_id) VALUES (446,1146);
INSERT INTO author_book (author_id,book_id) VALUES (447,1147);
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@