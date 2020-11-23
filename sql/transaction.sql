/* use case
inserting 1k rows causes 1k reindexes, but doing it in 1 transactions causes 1 reindex
*/

BEGIN | BEGIN TRANSACTION | BEGIN WORK;
-- statements...
COMMIT | COMMIT TRANSACTION | COMMIT WORK;  |  ROLLBACK[TO savepointname];

BEGIN;
	UPDATE accounts SET balance = balance + 100.00 WHERE acctnum = 12345;
	UPDATE accounts SET balance = balance - 100.00 WHERE acctnum = 7534;
COMMIT;


BEGIN;
	UPDATE customers SET balance = balance - 3 WHERE customer_id = 2;
COMMIT;

BEGIN;
	INSERT INTO customers VALUES (6, 'Neville, Robert', '555-9999', '1971-03-20', 0.00);
COMMIT;