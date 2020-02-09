<?php
$_POST['text'];

mysql_connect('localhost','root','');
mysql_select_db('p');

if (isset($_POST['text'])){
	$text = $_POST['text'];
	
	if (!empty($text)){
		
		$query = "INSERT INTO `POSTing Data` VALUES ('','".mysql_real_escape_string($text)."')";
	    if ($query_run = mysql_query($query)){
			echo 'Data inserted.';
		} else {
			echo 'Failed.';
		}
		
	} else {
		echo 'Please type something.';
	}
}
?>