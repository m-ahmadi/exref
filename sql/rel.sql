/*
person
	id                54245899131
	name              mohammad
	lastname          ahmadi
	age               32
	email             ahmdee18@gmail.com
	weight            98kg
	height            174cm
	sex               male
	job
		title           techlead
		address         12 street
		salary          17e6
	eyes
		color            green
		vision_strength  19
		glasses          false

obviously there are many ways to implenet the above data
but here are the two ways I found best:
*/
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* without foreign key constraint (bad*)
  in this method tables dont have relations with each other, we give them that when quering.

  you can join tables without foregin keys by a column name shared between tables
  and that's the columns in USING() or ON tb1.col = tb2.col
*/
SELECT `name`,`age`,`color`,`vision`
FROM `person`
JOIN `eyes`
  USING(`eyes_id`)
  
-- it's ok unless

SELECT `person_id`,`name`,`age`,`color`,`vision`
FROM `person`
JOIN `eyes`
  USING(`eyes_id`)

/*  but you're going to run into:
  "#1052 - Column in where clause is ambiguous"
  because two tables have a column with the same name
  but it can be solved by:
  setting aliases for those column that have the same name
*/
SELECT person.id AS user, eyes.id AS eye
FROM person
JOIN eyes
  ON person.id = eyes.id


--  *because entries don't get re-numbered in one column if the other-one changes
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* with foreign key constraint
*/