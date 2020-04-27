<?php

if (PHP_OS == "WIN32" || PHP_OS == "WINNT") {
	define('EOL', "\r\n");
} else if (PHP_OS == "Linux") {
	define('EOL', "\n");
} else {
	define('EOL', "\n");
}
function ln($out) {
	echo $out . EOL;
}
ln("this line will have the server platform's EOL character");



/*
\r = CR (Carriage Return)	// Used as a new line character in Mac OS before X
\n = LF (Line Feed)			// Used as a new line character in Unix/Mac OS X
\r\n = CR + LF				// Used as a new line character in Windows

All 3 of them represent the end of a line. But...

\r (Carriage Return)		- moves the cursor to the beginning of the line without advancing to the next line
\n (Line Feed)				- moves the cursor down to the next line without returning to the beginning of the line - *In a nix environment \n moves to the beginning of the line.
\r\n (End Of Line)			- a combi of \r and \n
*/