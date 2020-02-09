var ipaddr = require('ipaddr.js');

var addr = ipaddr.parse("2001:db8:1234::1");
var range = ipaddr.parse("2001:db8::");
 
addr.match(range, 32); // => true



//---------------------------------------------------------------------

var ipString = request.connection.remoteAddress;
if ( ipaddr.IPv4.isValid(ipString) ) {
	// ipString is IPv4
} else if ( ipaddr.IPv6.isValid(ipString) ) {
	var ip = ipaddr.IPv6.parse( ipString );
	if ( ip.isIPv4MappedAddress() ) {
		// ip.toIPv4Address().toString() is IPv4
	} else {
		// ipString is IPv6
	}
} else {
	// ipString is invalid
}