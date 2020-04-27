<?php
header('Content-Type: text/javascript; charset=UTF-8');

$lib = paths_under_dir('js/lib');
$app = paths_under_dir('js/app');
$all = array_merge($lib, $app);

foreach($all as $filename) {
	readfile($filename);
	echo "\n";
}

function paths_under_dir($dir) {
	$arr = [];
	foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($dir)) as $filename) {
		if (preg_match('/^.+[\\'. DIRECTORY_SEPARATOR .']\d{1,3}[_].+[.][j][s]$/', $filename)) {     // /\W{1}\.{1,2}$/  ==  \. \..
			echo $filename . "\n";
			$arr[] = (string)$filename;
		}
	}
	sort($arr, SORT_STRING);
	return $arr;
}
/*
	^          start of line
	[\]        only character backslash              note: [\\'.DS.']  =  [\] or [/] for Windows/Linux
	.+         1 or more of any single character
	\d{1,3}    between 1 and 3 of any digit: 0-000
	[s]        only character s
	$          end of line
*/ 
?>