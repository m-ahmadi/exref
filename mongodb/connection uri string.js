const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

'mongodb://localhost'                          // connects to a database server running locally on the default port:
'mongodb://sysop:moon@localhost'               // connects and logs in to admin   database as user sysop with the password moon
'mongodb://sysop:moon@localhost/records'       // connects and logs in to records database as user sysop with the password moon
'mongodb://%2Ftmp%2Fmongodb-27017.sock'        // connects to a UNIX domain socket with file path /tmp/mongodb-27017.sock
'mongodb://localhost:50000,localhost:50001'
'mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority'


/*
reference

mongodb://
	A required prefix to identify that this is a string in the standard connection format.

username:password@
	Optional. Authentication credentials.
	If specified, the client will attempt to log in to the specific database using these credentials after connecting.
	If the username or password includes the at sign @, colon :, slash /, or the percent sign % character, use percent encoding.

host[:port]
	The host (and optional port number) where the mongod instance (or mongos instance for a sharded cluster) is running.
	You can specify a hostname, IP address, or UNIX domain socket.
	Specify as many hosts as appropriate for your deployment topology:
		For a standalone, specify the hostname of the standalone mongod instance.
		For a replica set, specify the hostname(s) of the mongod instance(s) as listed in the replica set configuration.
		For a sharded cluster, specify the hostname(s) of the mongos instance(s).
	If the port number is not specified, the default port 27017 is used.

/database
	Optional.
	The name of the database to authenticate if the connection string includes authentication credentials in the form of username:password@.
	If /database is not specified and the connection string includes credentials, the driver will authenticate to the admin database.

?<options>	
	Optional.
	A query string that specifies connection specific options as <name>=<value> pairs.
	If the connection string does not specify a database/ you must specify a slash (/) between the last host and the question mark (?) that begins the string of options.
	connection options:
		ssl
		connectTimeoutMS
		socketTimeoutMS
		compressors
		zlibCompressionLevel
*/