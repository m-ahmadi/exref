/*
	InnoDB and Falcon engines are transactional (transaction-safe)
	MyISAM and MEMORY engines don't support transactions
	MySQL runs in autocommit mode by default (each statement is its own transaction)
	
	disable autocommit mode and COMMIT or ROLLBACK, and enable autocommit mode again
	or use START/BEGIN TRANSACTION
	when autocommit is disabled, COMMIT/ROLLBACK causes to begin the next transaction
	a transaction ends when:
		COMMIT
		ROLLBACK
		set autocommit = 1 (if is 0)
		START/BEGIN TRANSACTION
		data definition language (DDL) statements (create, alter, drop databases)
		lock-related statements
	
	DDL and lock-related statements commit implicitly because they can't be part of a transaction
*/
SHOW VARIABLES LIKE "autocommit";
SET autocommit = 0;

--------------------------------------------------------------------------------------------------------------------------------------
START TRANSACTION | BEGIN TRANSACTION	# suspends autocommit mode
	# transaction body
COMMIT | ROLLBACK						# autocommit changes to what it was before START TRANSACTION
--------------------------------------------------------------------------------------------------------------------------------------
SET autocommit = 0;
	# statements
COMMIT
SET autocommit = 1;
--------------------------------------------------------------------------------------------------------------------------------------
START TRANSACTION;
	# statements
	START TRANSACTION 					# commits outer transaction implicitly
COMMIT;
--------------------------------------------------------------------------------------------------------------------------------------
START TRANSACTION;
	INSERT INTO tbl SET col = 'Mohammad';
	INSERT INTO tbl SET col = 'Ahmadi';
COMMIT; 								# changes inside transaction is not visible to other mysql instances until COMMIT/ROLLBACK
ROLLBACK; 								# rolls back 1 step
--------------------------------------------------------------------------------------------------------------------------------------
START TRANSACTION;
	INSERT INTO tbl SET col = 'Mohammad';
	SAVEPOINT ding;
	INSERT INTO tbl SET col = 'Ahmadi';
	ROLLBACK TO SAVEPOINT ding;
COMMIT; 
ROLLBACK;
--------------------------------------------------------------------------------------------------------------------------------------