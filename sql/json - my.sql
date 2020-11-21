-- MariaDB
CREATE TABLE products(
	id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	price DECIMAL(9, 2) NOT NULL,
	stock INTEGER NOT NULL,
	attr VARCHAR(1024),
	CHECK(attr IS NULL OR JSON_VALID(attr))
);
INSERT INTO products VALUES(NULL, 'Shirt', 10.5, 78, '{"size": 42, "colour": "white"}');


-- MySQL
CREATE TABLE `book` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `tags` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;