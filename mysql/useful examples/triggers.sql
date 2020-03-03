/*
	A trigger is a stored program that is associated with a particular table,
	and is defined to activate for INSERT, DELETE, or UPDATE statements for that table.
	A trigger can be set to activate either before or after each row processed by the statement.
*/
CREATE TRIGGER trigger_name -- the trigger name
{BEFORE | AFTER}            -- when the trigger activates
{INSERT | UPDATE | DELETE}  -- what statement activates it
ON tbl_name                 -- the associated table
FOR EACH ROW trigger_stmt;  -- what the trigger does


CREATE TABLE t (percent INT, dt DATETIME);

delimiter $
CREATE TRIGGER bi_t BEFORE INSERT ON t
	FOR EACH ROW BEGIN
		SET NEW.dt = CURRENT_TIMESTAMP;
		IF NEW.percent < 0 THEN
			SET NEW.percent = 0;
		ELSEIF NEW.percent > 100 THEN
			SET NEW.percent = 100;
	END IF;
END$
delimiter ;
/*
	Within the trigger body, the OLD and NEW keywords enable you to access columns in the rows affected by a trigger.
	OLD and NEW are MySQL extensions to triggers; they are not case sensitive
*/
INSERT INTO t (percent) VALUES(-2); DO SLEEP(2);
INSERT INTO t (percent) VALUES(30); DO SLEEP(2);
INSERT INTO t (percent) VALUES(120);

SELECT * FROM t;