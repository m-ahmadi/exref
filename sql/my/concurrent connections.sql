SHOW PROCESSLIST;
SHOW VARIABLES LIKE "max_connections";
SHOW VARIABLES LIKE "max_user_connections"; # simultaneous connections limit, 0 = no limit


-- kill a sleep thread
SHOW PROCESSLIST;
/*
+----+-------------+--------------------+----------+---------+------+-------+------------------+
| Id | User        | Host               | db       | Command | Time | State | Info             |
+----+-------------+--------------------+----------+---------+------+-------+------------------+
| 49 | application | 192.168.44.1:51718 | XXXXXXXX | Sleep   |  183 |       | NULL             ||
| 55 | application | 192.168.44.1:51769 | XXXXXXXX | Sleep   |  148 |       | NULL             |
| 56 | application | 192.168.44.1:51770 | XXXXXXXX | Sleep   |  148 |       | NULL             |
| 57 | application | 192.168.44.1:51771 | XXXXXXXX | Sleep   |  148 |       | NULL             |
| 58 | application | 192.168.44.1:51968 | XXXXXXXX | Sleep   |   11 |       | NULL             |
| 59 | root        | localhost          | NULL     | Query   |    0 | NULL  | show processlist |
+----+-------------+--------------------+----------+---------+------+-------+------------------+
*/
KILL 57;


/* how to avoid connections in sleep state

Basically, you get connections in the Sleep state when:
	a PHP script connects to MySQL
	some queries are executed
	then, the PHP script does some stuff that takes time without disconnecting from the DB
	and, finally, the PHP script ends which means it disconnects from the MySQL server

So, you generally end up with many processes in a Sleep state when you have a lot of PHP processes that stay connected,
without actually doing anything on the database-side.

A basic idea, so : make sure you don't have PHP processes that run for too long
or force them to disconnect as soon as they don't need to access the database anymore.

Another thing, that I often see when there is some load on the server :
	There are more and more requests coming to Apache which means many pages to generate
	Each PHP script, in order to generate a page, connects to the DB and does some queries
	These queries take more and more time, as the load on the DB server increases
	Which means more processes keep stacking up

A solution that can help is to reduce the time your queries take -- optimizing the longest ones.
*/