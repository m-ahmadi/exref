<?php

$file = fopen("text.htm", "w");	// creates the file, if it doesn't exist
fwrite($file, "John Doe\n");
fwrite($file, "Jane Doe\n");
fclose($file);

file_get_contents("text.txt");
file_put_contents("text.txt", "chetori \n");

/*

Mode Mode Name Meaning
r   Read      Open the file for reading, beginning from the start of the file.
r+  Read      Open the file for reading and writing, beginning from the start of the file.
w   Write     Open the file for writing, beginning from the start of the file. If the file already exists, delete the existing contents. If it does not exist, try to create it.
w+   Write    Open the file for writing and reading, beginning from the start of the file. If the file already exists, delete the existing contents. If it does not exist, try to create it.
x   Cautious  write Open the file for writing, beginning from the start of the file. If the file already exists, it will not be opened, fopen() will return false, and PHP will generate a warning.
x+  Cautious  write Open the file for writing and reading, beginning from the start of the file. If the file already exists, it will not be opened, fopen() will return false, and PHP will generate a warning.
a   Append    Open the file for appending (writing) only, starting from the end of the existing contents, if any. If it does not exist, try to create it.
a+  Append    Open the file for appending (writing) and reading, starting from the end of the existing contents, if any. If it does not exist, try to create it.
b   Binary    Used in conjunction with one of the other modes.You might want to use this mode if your file system differentiates between binary and text files.Windows systems differentiate; Unix systems do not.The PHP developers recommend you always use this option for maximum portability. It is the default mode.
t   Text      Used in conjunction with one of the other modes.This mode is an option only in Windows systems. It is not recommended except before you have ported your code to work with the b option.
*/