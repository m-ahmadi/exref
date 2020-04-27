<?php
error_reporting(E_ALL);
set_time_limit(0);
ob_implicit_flush(1);
//basename(__FILE__, '.php');
//var_dump($argv);

$toreadfile;
$towritefile;
checkargs($argv);



class Config {
	private $configfile = '';
	private $output = '';
	private $outarr = [];
	private $indent = true;
	private $indentlvl = 1;
	private $oneindent = "    ";
	
	function __construct($path) {
		$this->configfile = $path;
	}
	private function emptystring($line) {
		return strlen($line) !== 0;
	}
	private function charexists($str, $char) {
		return strpos($str, $char) !== false;
	}
	private function iscomment($line) {
		return $line[0] === '#';
	}
	private function handleindent() {
		if ( $this->indent ) {
			for ($i=0; $i < $this->indentlvl; $i+=1) {
				$this->outarr[] = $this->oneindent;
			}
		}
	}
	private function linetype($line) {
		$t = '';
		if ( $this->charexists($line, '=') && !$this->charexists($line, '{') ) { // = charexists
			$t = 'normal';
		} else if ( $this->charexists($line, '=') && $this->charexists($line, '{') ) {
			$t = 'opening';
		} else if ( !$this->charexists($line, '=') && $this->charexists($line, '}') ) {
			$t = 'closing';
		}
		return $t;
	}
	private function handlenormal($line, $last= false) {
		$arr = explode('=', $line, 2);
		$prop = trim( $arr[0] );
		$val = trim( $arr[1] );
		$this->handleindent();
		if ( $this->charexists($val, '#') ) {
			$val = trim( explode('#', $val, 2)[0] );
		}
		$this->outarr[] = "$prop: ";
		
		if ( preg_match('/^[0-9]+[.]{1}[0-9]+$/', $val) ) { // number 0123459789.0123459789
			$this->outarr[] = "$val";
		} else { // string
			$this->outarr[] = "'$val'";
		}
		$this->outarr[] = ",";
		$this->outarr[] = "\n";
		
	}
	private function handleopen($line) {
		$arr = explode('=', $line);
		$prop = trim( $arr[0] );
		$open = trim( $arr[1] );
		$this->handleindent();
		$this->indentlvl += 1;
		$this->outarr[] = "$prop: $open\n";
	}
	private function handleclose($line) {
		$close = trim( $line );
		$this->indentlvl -= 1;
		$this->handleindent();
		$this->outarr[] = "$close";
		$this->outarr[]= ",";
		$this->outarr[]= "\n";
	}
	private function handleline ($line) {
		if ( $this->linetype($line) === 'normal' ) {
			$this->handlenormal($line);
		} else if ( $this->linetype($line) === 'opening' ) {
			$this->handleopen($line);
		} else if ( $this->linetype($line) === 'closing' ) {
			$this->handleclose($line);
		}
	}
	private function iterate() {
		$file = fopen($this->configfile, "r");
		if (!$file) {
			die("Config->iterate():  Could not read file: $file\n");
		}
		while ( !feof($file) ) {
			$line = fgets($file, 1024);
			if ( !$this->iscomment($line)  ) { //&& !emptystring($line)
				$this->handleline($line);
			}
		}
		if (!feof($file)) {
			echo "Error: unexpected fgets() fail\n";
		}
		fclose($file);
	}
	public function getoutput() {
		$this->output = '';
		$this->outarr = [];
		$this->outarr[] = "var config = {\n";
		$this->iterate();
		$this->outarr[] = "};\n";
		
		for($i=0; $i < count($this->outarr); $i+=1) {
			$v = $this->outarr[$i];
			if ( strcmp($v, "}") === 0 ) {
				//array_splice($this->outarr, $i-3, 1);
				// ############################################
				$j = $i;
				while ($this->outarr[$i] !== ',') {
					$j -= 1;
					if ($this->outarr[$j] === ',') {
						array_splice($this->outarr, $j, 1);
						break;
					}
				}
			} else if ( strcmp($v, "};\n") === 0 ) {
				array_splice($this->outarr, $i-2, 1);
			}
		}
		foreach($this->outarr as $v) {
			$this->output .= $v;
		}
		unset($v);
		//print_r($this->outarr);
		return $this->output;
	}

};



$length = strlen( file_get_contents($toreadfile) );
echo ">>> Mohammad is watching for changes: \n";
changefile();
while ( true ) {
	usleep(200000); // microsecond, 100 mili = 100 000
	$currlen = strlen(file_get_contents($toreadfile));
	if ( $currlen !== $length ) {
		$length = $currlen;
		changefile();
	}
}








function changefile() {
	global $toreadfile, $towritefile;
	$obj = new Config($toreadfile);
	$con = $obj->getoutput();
	file_put_contents( $towritefile,  $con );
	echo ">>> Change detected to: $toreadfile\n\twrite $towritefile \n";
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
			echo "// filename ($fullpath) does not match the template. (0-name.js)\n";
		}
	}
	sort($arr, SORT_NATURAL);
}
function checkargs($argv) {
	global $toreadfile, $towritefile;
	$watchcond = false;
	$filecond = false;
	for ($i=0; $i < count($argv); $i+=1) {
		//global $watchcond, $filecond;
		$arg = $argv[$i];
		if ($arg === '--watch') {
			$watchcond = true;
		} else if ($arg !== '--watch' && basename($arg, '.php') !== basename(__FILE__, '.php')) {
			if ( preg_match('/[a-z,.]+[:][a-z,.]+$/', $arg) ) {
				$filecond = true;
			}
		}
	}
	if ($watchcond) {
		if ($filecond) {
			foreach($argv as $arg) {
				if (basename($arg, '.php') !== basename(__FILE__, '.php')) {
					if ($arg !== '--watch') {
						$arr = explode(':', $arg);
						$toreadfile = $arr[0];
						$towritefile = $arr[1];
					}
				}
			};
			unset($arg);
		} else {
			die("File patch omitted.");
		}
	} else {
		die("Command --watch omitted.");
	}
	$readfile = @file_get_contents($toreadfile);
	$writefile = @file_get_contents($towritefile);
	if ( $readfile === false ) {
		die("Could not read from: $toreadfile");
	}
	if ( $writefile === false ) {
		die("Could not write to: $towritefile");
	}
}
?>