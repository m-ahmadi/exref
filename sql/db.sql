CREATE DATABASE name
	[ [ WITH ] [ OWNER [=] user_name ]
		[ TEMPLATE [=] template ]
		[ ENCODING [=] encoding ]
		[ LOCALE [=] locale ]
		[ LC_COLLATE [=] lc_collate ]
		[ LC_CTYPE [=] lc_ctype ]
		[ TABLESPACE [=] tablespace_name ]
		[ ALLOW_CONNECTIONS [=] allowconn ]
		[ CONNECTION LIMIT [=] connlimit ]
		[ IS_TEMPLATE [=] istemplate ] ]


CREATE DATABASE foo;

DROP DATABASE foo;
DROP DATABASE IF EXISTS foo;

SELECT datname FROM pg_database; -- show databases
SELECT * FROM pg_trigger;        -- show trigger