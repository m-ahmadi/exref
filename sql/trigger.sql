-- a stored program associated with a table
-- activates for INSERT/DELETE/UPDATE on that table
-- can activate before/after each row processed by the statements

-- make trigger itself
CREATE TRIGGER trigger_name           -- trigger name
{BEFORE|AFTER} {INSERT|UPDATE|DELETE} -- when activates
ON tblname                            -- on what table
[FOR [EACH] {ROW|STATEMENT}]          -- what the trigger does
EXECUTE PROCEDURE trigger_function    -- ...

-- make trigger function
CREATE [OR REPLACE] FUNCTION trigger_function() RETURNS TRIGGER LANGUAGE PLPGSQL AS
$$
BEGIN
	-- trigger logic
END;
$$


-- example
CREATE FUNCTION do_something() RETURNS TRIGGER LANGUAGE PLPGSQL AS
$$ BEGIN
	IF NEW.last_name <> OLD.last_name THEN
		 INSERT INTO employee_audits (employee_id,last_name,changed_on)
		 VALUES (OLD.id,OLD.last_name,now());
	END IF;
	
	RETURN NEW;
END; $$

CREATE TRIGGER trigname BEFORE UPDATE ON tblname FOR EACH ROW EXECUTE PROCEDURE do_something();