<html>
<head>
  <title>MySQL Interface - for WAMP</title>
  <link rel="stylesheet" href="http://profperry.com/Classes/Main.css" type="text/css">

  <style>

  body {
  	font-family: Arial, Helvetica, sans-serif;
  	color: black;
  }

  textarea {
  	font-size: 16px;
  	font-family: Arial, Helvetica, sans-serif;
  }

  table {
    	font-size: 16px;
    	font-family: Arial, Helvetica, sans-serif;
  }

  </style>

  <script>
  function deleteHistory()
  {
		myForm = document.getElementById('myform');
		deleteHistoryFlag = document.getElementById('deleteHistoryFlag');
		deleteHistoryFlag.value = "Y";

		myForm.submit();

		return false;
  }

  function clear_textarea( )
  {
  	document.getElementById('SQLStatement').value = "";
  }
  </script>
</head>

<body style="font-family: Arial, Helvetica, sans-serif; color: Blue; background-color: silver;">

<form id="myform" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>" >
<input type="hidden" name="deleteHistoryFlag" id="deleteHistoryFlag" value="N">

<div style="position : absolute; top: 10px; left: 10px; width: 1100px;">

<h2 style="background-color: #F5DEB3;">Execute MySQL Statements - for WAMP</h2>

<?php

$db = mysql_connect('localhost','root','');

if (!$db)
{
	print "<h1>Unable to Connect to MySQL</h1>";
}

$dbname = 'test';

$btest = mysql_select_db($dbname);

if (!$btest)
{
	print "<h1>Unable to Select the Database</h1>";
}

if (isset($_POST['deleteHistoryFlag']))
{
	$deleteHistoryFlag = $_POST['deleteHistoryFlag'];
} else {
	$deleteHistoryFlag = "N";
}



if (isset($_POST['action']))
{
	$action = $_POST['action'];
} else {
	$action = 'dummy';
}

$err_cntr = 0;
$myMsg = '';
$myDebug = '';

if ($action == 'update')
{

    $SQLStatement = $_POST['SQLStatement'];

	$contents = trim($SQLStatement);

	if ($contents == '')
	{
		$contents = '';
	}

	if ($deleteHistoryFlag != "Y")
	{

	  $mySQLArray = explode(';', $SQLStatement);  //Break up into individual SQL statements

	  foreach ($mySQLArray as $element)
	  {
		  $sqlstatement = trim($element);

		  //$contents = trim($SQLStatement);  //Big SQL statment from line 95!!

		  $sqlstatement = stripslashes($sqlstatement);

		//  print "<br>$sqlstatement";

		  if (trim($SQLStatement) == '')
		  {
			//$contents = '';

		  } else {

			$select_statement_flag = 'false';

			$pos1 = stripos($sqlstatement, "select ");

			if ($pos1 === false)
			{
				//skip
			} else {
				$select_statement_flag = "true";
			}

			if (trim($sqlstatement) != '')
			{

				$status_results = doSQLStatement($sqlstatement, $select_statement_flag);


				if ($status_results == 'error')
				{
					$myDebug .= "<br><span style='color: red;'>Error: '".$sqlstatement."'</span>";
					$err_cntr++;
				} else {
					if ($status_results == 'ok')
					{
						$myMsg .= "<br><span style='color: blue;'>OK: '".$sqlstatement."'</span>";
					} else {
						$myMsg .= "<br><br>SELECT Statement: ".$sqlstatement.'<br>'.$status_results;
					}
				}
			}

		  }
	  }
	} else {
		//$contents = '';
	}

	if ($err_cntr > 0)
	{
		$myMsg .= "<h3><font color=red>There were errors in at least one of your statements!</font></h3>";
		$myMsg .= "<br><b>Try running this program one more time by clicking Reload/Refresh</b>";
		$myMsg .= "<br><b>If you get errors again, then email me!</b>";
	} else {
		if ($contents != '')
		{
			$myMsg .= "<br>SQL Statements were Sucessful.";
		}
	}
} else {
	$contents = '';
}

print "SQL Statement:  <span style='color: maroon; font-size: smaller;'>(end each SQL statement with a <b>;</b> (semi-colon)</span>";
print "<br><textarea cols=\"80\" rows=\"9\" name=\"SQLStatement\" id=\"SQLStatement\">";
print stripslashes($contents);
print "</textarea>";

?>

<br><br><input type="submit" value="Submit SQL Statements"> or <span style="border-bottom: thin solid Blue;"  onClick="clear_textarea();">Clear Box</span>


<input type=hidden name=action value=update>



<hr size="4" style="background-color: #F5DEB3; color: #F5DEB3;">

<?php
	print "$myMsg";
	print "<br>$myDebug";



function doSQLStatement($a_sql_string, $select_statement_flag)
{
    global $myMsg;

	$b_sql_string = stripslashes($a_sql_string);

	// print "<br>doSQL2: '".$b_sql_string."'";

	$result = mysql_query($b_sql_string);


	if ($result) {
	   // if ($myrowcount == 0 && !$errors_found)
		//{
			if ($select_statement_flag == "true")
			{
			   $selectResultsTable = formatSelectResults($result, $select_statement_flag, 'Y');
			   //print "<br>selectResultsTable";

			   writeSQLHistory($a_sql_string);

			   return $selectResultsTable;
			} else {
				$aff_rows = mysql_affected_rows();

				$myMsg .= "<br><b>Rows Afffected: ".$aff_rows.'</b>';

				if ($aff_rows < 1)
				{
					$myMsg .= "<br>SQL Statement: ".$a_sql_string."<br>";
				}

				writeSQLHistory($a_sql_string);

				return 'ok';
			}
		//}

	} else {
		$myMsg .= "<br><font color=red>MySQL No: ".mysql_errno();
		$myMsg .= "<br>MySQL Error: ".mysql_error();
		$myMsg .= "<br>SQL: ".$b_sql_string;
		$myMsg .= "<br>MySQL Affected Rows: ".mysql_affected_rows()."</font><br>";

		writeSQLHistory($a_sql_string);

		return 'error';
	}


}

function writeSQLHistory($a_sql_string)
{
	$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
	$sqlhistory_filename = $DOCUMENT_ROOT.'data/'.'sql_history.txt';

	if (file_exists($sqlhistory_filename))
	{
		$sqlhistory = file_get_contents($sqlhistory_filename);
		$sqlhistory = $a_sql_string.";\n\n".$sqlhistory;
		file_put_contents($sqlhistory_filename, $sqlhistory);
	} else {
		$fp = fopen($sqlhistory_filename, 'a');
		fwrite($fp, $a_sql_string);
		fclose($fp);
	}
}

function formatSelectResults($result, $select_statement_flag, $show_statement_flag)
{

	$errors_found = false;

	 //print "<br>SELECT statement found";

	if (!empty($result))
	{
		if ($select_statement_flag == "true" || $show_statement_flag == "true")
		{
			$numresults = mysql_num_rows($result);
			$numfields = mysql_num_fields($result);

			 $selectResults  = '<table border=1 style="color: black;">';

			 $selectResults .= "<tr>";

			for ($k = 0; $k < $numfields; $k++)
			{
				 $selectResults .= "<th style=\"background-color: #F5DEB3;\">";
				 $selectResults .= mysql_field_name($result, $k);
				 $selectResults .= "</th>";
			}

			$selectResults .= "</tr>";

			$myrowcount = 0;

			for ($i = 0; $i < $numresults; $i++)
			{
				$myrowcount++;

				$row = mysql_fetch_array($result);

				if (!($i % 2) == 0)
				{
					 $selectResults .= "<tr style=\"background-color: #F5DEB3;\">";
				} else {
					 $selectResults .= "<tr style=\"background-color: white;\">";
				}

				for ($j = 0; $j < $numfields; $j++)
				{
					 $selectResults .= "<td>";

					 $celldata = stripslashes($row[$j]);

					 if (empty($celldata))
					 {
					 	$celldata = "<span style='color: maroon; font-size: 10px;'>(null)</span>";  //new
					 }

					 $selectResults .= $celldata;

					 $selectResults .= "</td>";
				}

				 $selectResults .= "</tr>";

			}

			$selectResults .= "</table>";

		} else  {
			 $selectResults .= '<br>ERROR: Not a SELECT/SHOW statement';
		}

	} else {
		 $selectResults .= '<br>ERROR: Empty Results';
	}


	$selectResults .= "<br><br><b>Number of Rows in Results: $myrowcount </b><br><br>";   //new new



	return  $selectResults;

}
?>
</div>



<div style="position: absolute; top: 10px;  left: 650px; width: 600px;">

<?php
	$DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
	$sqlhistory_filename = $DOCUMENT_ROOT.'data/'.'sql_history.txt';

	if ($deleteHistoryFlag == "Y")
	{
		if (file_exists($sqlhistory_filename))
		{
			unlink($sqlhistory_filename);
		}

		$sqlhistory = '';

	} else {
		if (file_exists($sqlhistory_filename))
		{
			$sqlhistory = file_get_contents($sqlhistory_filename);
		} else {
			$sqlhistory = '';
		}
	}
?>

<h4>SQL Statement History (Most recent first)</h4>
<textarea style='background-color: #FFFFCC;' rows='11' cols='60'>
<?php print $sqlhistory ?>
</textarea>

<p><a href="" onClick="return deleteHistory();"><span style='color: blue;'>Delete History?</span></a>


</div>

</form>
</body>
</html>