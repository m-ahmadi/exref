--	Stored procedures are executed as standalone operations using the CALL statement rather than in expressions
--	Use a procedure if:
--		you need only to perform a computation to produce an effect or action without returning a value
--		the computation produces result sets (which a function is not allowed to do)

DELIMITER $
CREATE PROCEDURE test()
READS SQL DATA
DETERMINISTIC
BEGIN
	SELECT * FROM `actor`;
END$
DELIMITER ;
CALL test();
--@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
--															parameters
/*	
	3 types of parameters:
	IN (default if no type is given)
		For an IN parameter, the caller passes a value into the procedure.
		The value can be modified within the procedure,
		but any changes are not visible to the caller after the procedure returns.
	
	OUT
		An OUT parameter is the opposite.The procedure assigns a value to the parameter, which can be accessed by
		the caller after the procedure returns.
	
	INOUT
		An INOUT parameter enables the caller to pass in a value, and to get back a value.
*/

/*
	To use an OUT or INOUT parameter, specify a variable name when you call the procedure.
	The procedure can set the parameter value, and the corresponding variable will have that value when the procedure returns.
*/
DELIMITER $
CREATE PROCEDURE count_by_sex (OUT p_male INT, OUT p_female INT)
BEGIN
	SELECT COUNT(*) FROM student WHERE sex = 'M' INTO p_male;
	SELECT COUNT(*) FROM student WHERE sex = 'F' INTO p_female;
END;
DELIMITER ;


CALL count_by_sex(@mcount, @fcount);
SELECT 'Number of male students: ', @mcount;
SELECT 'Number of female students:', @fcount;