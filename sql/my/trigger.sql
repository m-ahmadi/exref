CREATE TRIGGER trigger_name -- the trigger name
{BEFORE | AFTER}            -- when the trigger activates
{INSERT | UPDATE | DELETE}  -- what statement activates it
ON tbl_name                 -- the associated table
FOR EACH ROW trigger_stmt;  -- what the trigger does

-- OLD and NEW keywords are mysql extensions to triggers
-- in trigger body, OLD/NEW is to access columns in rows affected by the trigger
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

INSERT INTO t (percent) VALUES(-2); DO SLEEP(2);
INSERT INTO t (percent) VALUES(30); DO SLEEP(2);
INSERT INTO t (percent) VALUES(120);

SELECT * FROM t;