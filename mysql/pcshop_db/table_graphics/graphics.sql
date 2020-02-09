/*!40101 SET NAMES utf8 */;

DROP TABLE IF EXISTS graphics;

CREATE TABLE graphics (
	`product_id` int(11) auto_increment,
	`graphic_id` int(11),
	`p_cat` varchar(15),
	`company` varchar(15),
	`model` varchar(100),
	`img_1` varchar(200),
	`img_2` varchar(200),
	`img_3` varchar(200),
	`img_4` varchar(200),
	`img_5` varchar(200),
	`img_brand` varchar(200),
	`img_generation` varchar(200),
	`price` varchar(12),
	primary key (product_id)
);
ALTER TABLE graphics ADD INDEX (graphic_id, product_id);