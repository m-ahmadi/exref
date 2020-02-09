window.URL | webkitURL
new URL("http://google.com")

// returns a URL object (just like window.location object)
{
	hash: "",
	host: "google.com",
	hostname: "google.com",
	href: "http://google.com/",
	origin: "http://google.com",
	password: "",
	pathname: "/",
	port: "",
	protocol: "http:",
	// etc...
}

URL.createObjectURL()
URL.revokeObjectURL()