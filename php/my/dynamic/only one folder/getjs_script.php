<?php
$path = isset( $path ) ? $path : null;
if     (  !isset    ( $path )  ) {  die('path argument is not set.');         } else
if     (  !is_array ( $path )  ) {  die('path argument is not an array.');    } else
if     (  empty     ( $path )  ) {  die('path argument is empty.');           }
$arr = [];

foreach ($path as $v) {
	if (  empty($v)            ) {  die('path item is empty.');               } else
	if (  !is_string($v)       ) {  die('path item is not string.');          }
	paths_under_dir($v, $arr);
}

foreach($arr as $filename) {
	echo '<script type="text/javascript" src="'.$filename.'" asynch></script>';
}

function paths_under_dir($dir, &$arr) {
	$rgx_upfolder = '/^\.{1,2}$/';
	$rgx_filename = '/^\d{1,3}[-].+[.][j][s]$/';
	$rgx_main     = '/^[m][a][i][n][.][j][s]$/';
	foreach (new DirectoryIterator($dir) as $filename) {
		$dir = str_replace('/', DIRECTORY_SEPARATOR, $dir);
		$dir = str_replace('\\', DIRECTORY_SEPARATOR, $dir);
		$fullpath = $dir. DIRECTORY_SEPARATOR .(string)$filename;
		
		if ( preg_match($rgx_filename, $filename) or preg_match($rgx_main, $filename) ) {
			array_push($arr, $fullpath);
		} else if ( !preg_match($rgx_upfolder, $filename) ) {
			echo "<!-- filename ($fullpath) does not match the template. (0-name.js) -->\n";
		}
	}
	//sort($arr, SORT_STRING);
}
/*
	^          start of line
	[\]        only character backslash              note: [\\'.DS.']  =  [\] or [/] for Windows/Linux
	.+         1 or more of any single character
	\d{1,3}    between 1 and 3 of any digit: 0-000
	[s]        only character s
	$          end of line
*/
//		'/^.+[\\'. DIRECTORY_SEPARATOR .']\d{1,3}[_].+[.][j][s]$/'			// /\W{1}\.{1,2}$/  ==  \. \..
//		new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)	// get all in folder and subfolders
?>