.indexOf	// faster, IE9+
.search		// slower, IE

"abc".indexOf("/") === -1	// char doesn't exist
"a/b".indexOf("/") >= 0		// char exist
"aBc".search("bc") === -1	// char doesn't exist
"aBc".search("bc") >= 0		// char exist


// other ways: (I don't like them)
~"a/b".indexOf("/")			// char exist (bitwise not)
/\//i.test("a/b")			// char exist (regex)

// above ways are case-sensitive, for case-insensitive:
"abC".toLowerCase().indexOf("/") === -1