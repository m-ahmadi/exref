ALTER USER postgres PASSWORD 'newpass';                     -- change password of a role
SELECT * FROM pg_stat_activity WHERE datname = 'TARGET_DB'; -- see active connections to a database
REVOKE CONNECT ON DATABASE TARGET_DB FROM public;           -- prevent future connections on a database
GRANT  CONNECT ON DATABASE TARGET_DB TO   public;           -- undo abouve

-- other example about active connections
SELECT pid, pg_terminate_backend(pid) 
FROM pg_stat_activity 
WHERE datname = current_database() AND pid <> pg_backend_pid();

SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'TARGET_DB';


DROP DATABASE foo;
DROP DATABASE IF EXISTS foo;

CREATE DATABASE foo;