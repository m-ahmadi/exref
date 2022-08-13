-- functions and store procedures are borth considered routines
-- sometimes called stored program
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
CREATE PROCEDURE name()
BEGIN
	DECLARE var_name CHAR(20);
	SET var_name = '';
	
	IF condition THEN
		SET var_name = '';
	END IF;
END;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
CREATE PROCEDURE greetings()
BEGIN
	DECLARE user CHAR(77) CHARACTER SET utf8;
	SET user = ( SELECT CURRENT_USER() );
	IF INSTR(user, '@') > 0 THEN
		SET user = SUBSTRING_INDEX(user,'@',1);
	END IF;
	IF user = '' THEN -- anonymous user
		SET user = 'earthling';
	END IF;
	SELECT CONCAT('Greetings, ',user, '!') AS greeting;
END;
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- if a stored program's body contains any internal semicolons, you should redefine the delimiter while defining the program
delimiter $
CREATE PROCEDURE show_times()
BEGIN
	SELECT 'Local time is:', CURRENT_TIMESTAMP;
	SELECT 'UTC time is:', UTC_TIMESTAMP;
END$
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
-- options for a routine:
DETERMINISTIC     -- A routine which always produces the same result for the same input parameters
NOT DETERMINISTIC -- Opposite of "DETERMINISTIC" (default)
READS SQL DATA    -- routine will ONLY read data from databases (SELECT)
MODIFIES SQL DATA -- routine contains statements that may write data (UPDATE, INSERT, DELETE, ALTER)
NO SQL            -- routine contains no SQL statements.
CONTAINS SQL      -- routine contains SQL instructions, but does not contain statements that read or write data

--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@