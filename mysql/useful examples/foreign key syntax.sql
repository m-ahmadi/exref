CREATE TABLE parent (
    `id` INT NOT NULL,
    PRIMARY KEY (id)
) ENGINE=INNODB;

CREATE TABLE child (
    `id` INT, 
    `parent_id` INT,
    INDEX `par_id` (parent_id),
    FOREIGN KEY (parent_id) 
        REFERENCES `parent`(`id`)
        ON DELETE CASCADE
) ENGINE=INNODB;

------------------------------------------------------------------------------------------------------------
CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `text` TEXT NOT NULL,
  FOREIGN KEY (`user_id`) 
        REFERENCES `users`(`id`)
) ENGINE=InnoDB;

-- or in an alter statement:
ALTER TABLE `comments`
	ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);