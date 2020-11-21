INSERT INTO `book` (`book_id`,`title`,`pub_date`,`last_price`) VALUES (1145,'Designing Databases','2012-3-1',45.00);
INSERT INTO `book` (`book_id`,`title`,`pub_date`,`last_price`) VALUES (1146,'SQLite Made Simple','2012-4-11',39.95);
INSERT INTO `book` (`book_id`,`title`,`pub_date`,`last_price`) VALUES (1147,'Pocket Guide to SQL','2012-5-21',19.95);

INSERT INTO `author` (`author_id`,`first_name`,`last_name`,`email`) VALUES (445,'Tucker','Morrison','tucker@');
INSERT INTO `author` (`author_id`,`first_name`,`last_name`,`email`) VALUES (446,'Robert','Allen','rob@');
INSERT INTO `author` (`author_id`,`first_name`,`last_name`,`email`) VALUES (447,'Jordan','Winters','jw@');

INSERT INTO `author_book` (`author_id`,`book_id`) VALUES (447,1145);
INSERT INTO `author_book` (`author_id`,`book_id`) VALUES (445,1145);
INSERT INTO `author_book` (`author_id`,`book_id`) VALUES (446,1146);
INSERT INTO `author_book` (`author_id`,`book_id`) VALUES (447,1147);