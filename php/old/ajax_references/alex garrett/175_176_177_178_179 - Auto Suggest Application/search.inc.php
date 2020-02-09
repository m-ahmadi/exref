<?php

if (isset($_GET['search_text'])){
 $search_text = $_GET['search_text'];	
}

mysql_connect('localhost','root','');
mysql_select_db('p');
	   

if (!empty($search_text)){
  $query = "SELECT `name` FROM `auto suggest application` WHERE `name` LIKE '".mysql_real_escape_string($search_text)."%'";
  $query_run = mysql_query($query);
  
  /*
  $mysql_num_rows = mysql_num_rows($query_run);
  
  if ($mysql_num_rows>=1){
	  
	  for ($query_result=0;$query_result<$mysql_num_rows;$query_result++){
		  		  
		  $result = mysql_result($query_run,$query_result,'name');
		  echo $result.'<br>';
	  } 
  } else {
    echo 'No match.';
  }
  */
  
  while ($query_row = mysql_fetch_assoc($query_run)){
		  echo $name = $query_row['name'].'<br>';
	  }
}

?>