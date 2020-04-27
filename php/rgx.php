<?php
if (preg_match('/^.+[\\'. DIRECTORY_SEPARATOR .']\d{1,3}[_].+[.][c][s][s]$/', $filename)) {
	echo $filename;
}
/*
^          start of line
[\]        only character backslash              note: [\\'.DS.']  =  [\] or [/] for Windows/Linux
.+         1 or more of any single character
\d{1,3}    between 1 and 3 of any digit: 0-000
[s]        only character s
$          end of line

/\W{1}\.{1,2}$/  ==  \. \..
*/ 