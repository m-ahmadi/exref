var str = "salam olaghe aziz halet, chetori, khobi khoshi?";

str.substr( 0, str.indexOf(',') )
"salam olaghe aziz halet"

str.substr( 0, str.lastIndexOf(',') )
"salam olaghe aziz halet, chetori"

// or
str.split(',')[0]; // only substring before the first instance of char