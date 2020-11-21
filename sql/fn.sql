-- mysql
	--	functions calculate a value to be returned to the caller for use in expressions,
	--	just like built-in functions such as COS() or HEX()
--	if you need to return more than one value, you cannot use a function
DELIMITER $
CREATE FUNCTION inventory_in_stock(p_parameter INT)
RETURNS tinyint(1)
READS SQL DATA
BEGIN
	DECLARE v_variable_name INT;
	DECLARE v_another_var  INT;
	
	SELECT COUNT(*) INTO v_rentals FROM table_name WHERE col = p_parameter;
	
	IF v_variable_name = 0 THEN
		RETURN TRUE;
	END IF;
	
	SELECT COUNT(col) INTO v_another_var FROM table_name LEFT JOIN another_table USING(col) WHERE col = p_inventory_id AND another_col IS NULL;
	
	IF v_another_var > 0 THEN
		RETURN FALSE;
    ELSE
		RETURN TRUE;
	END IF;
END$
DELIMITER ;
