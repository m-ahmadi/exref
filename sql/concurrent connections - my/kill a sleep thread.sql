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