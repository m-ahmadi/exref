<html>
<head>
  <title>Reload Bookpub</title>
  <link rel="stylesheet" href="http://profperry.com/Classes/Main.css" type="text/css">
</head>
<body style="font-family: Arial, Helvetica, sans-serif; color: Blue;">

<div class=toptext>
<?php
print  "<span style=\"font-family: Arial, Helvetica, sans-serif; font-size: 18px; font-weight: bold; font-stretch: wider; color: white\">&nbsp;&nbsp;&nbsp;Practice Server</span>";
?>
</div>

<div style="width: 780px;">
<br><br><br><br>
<h2 style="background-color: #F5DEB3;">Reload the Bookpub Database - Version 5</h2>


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


$err_cntr = 0;

$bookpub_sql = getSQL();  //Retreive the entire SQL statement string

$mySQLArray = explode(';', $bookpub_sql);  //Break up into individual SQL statements

foreach ($mySQLArray as $element)
{
	//print "<br>$element";
	$sqlstatement = trim($element);
	if ($sqlstatement != '')
	{
		$status = doSQLStatement($sqlstatement);
		if ($status == 'error')
		{
			$err_cntr++;
		}
	}
}

if ($err_cntr > 0)
{
	print "<h1><font color=red>There were errors!</font></h1>";
	print "<br><b>Try running this program one more time by clicking Reload/Refresh</b>";
    print "<br><b>If you get errors again, then email me!</b>";
} else {
	print "<h1>bookpub was re-loaded successfully</h1>";
	print "<br><b>Run this script any time you change the database</b>";
}


function doSQLStatement($a_sql_string)
{
	$result = mysql_query($a_sql_string);

	if ($result) {
		$aff_rows = mysql_affected_rows();
		return 'ok';
	} else {
		echo("<br><font color=red>MySQL No: ".mysql_errno()."");
		echo("<br>MySQL Error: ".mysql_error()."");
		echo("<br>SQL: ".$a_sql_string."");
		echo("<br>MySQL Affected Rows: ".mysql_affected_rows()."</font><br>");

		return 'error';
	}
}

?>

<?php
function getSQL()
{

$bookpub_all_sql = "
drop table author;

create table author
 (ssn varchar(11) primary key,
 lastname varchar(40) not null,
 firstname varchar(20) not null,
 phone varchar(12) null,
 address varchar(40) null,
 city varchar(20) null,
 state varchar(2) null,
 zip varchar(5) null);
;

drop table publisher;

create table publisher
  (pub_id varchar(1) primary key,
  name varchar(40) null,
  address varchar(40) null,
  city varchar(20) null,
  state varchar(2) null);
;

drop table bookauthor;

create table bookauthor
 (ssn varchar(11) not null,
 isbn varchar(13) not null,
 author_order int not null,
 royaltyshare numeric (5,2) null,
 primary key(ssn, isbn)
 );


drop table book;

create table book
  (isbn varchar(13) primary key,
  title varchar(80) not null,
  type varchar(12) null,
  pub_id varchar(4) null,
  price numeric(9,2) null,
  advance numeric(9,2) null,
  ytd_sales int null,
  pubdate date null);
;


insert into author
values('409-56-7008', 'Bennet', 'Abraham',
'415 658-9932', '6223 Bateman St.', 'Berkeley', 'CA', '94705')
;
insert into author
values ('213-46-8915', 'Green', 'Marjorie',
'415 986-7020', '309 63rd St. #411', 'Oakland', 'CA', '94618')
;
insert into author
values('238-95-7766', 'Carson', 'Cheryl',
'415 548-7723', '589 Darwin Ln.', 'Berkeley', 'CA', '94705')
;
insert into author
values('998-72-3567', 'Ringer', 'Albert',
'801 826-0752', '67 Seventh Av.', 'Salt Lake City', 'UT', '84152')
;
insert into author
values('899-46-2035', 'Ringer', 'Anne',
'801 826-0752', '67 Seventh Av.', 'Salt Lake City', 'UT', '84152')
;
insert into author
values('722-51-5454', 'DeFrance', 'Michel',
'219 547-9982', '3 Balding Pl.', 'Gary', 'IN', '46403')
;
insert into author
values('807-91-6654', 'Panteley', 'Sylvia',
'301 946-8853', '1956 Arlington Pl.', 'Rockville', 'MD', '20853')
;
insert into author
values('893-72-1158', 'McBadden', 'Heather',
'707 448-4982', '301 Putnam', 'Vacaville', 'CA', '95688')
;
insert into author
values('724-08-9931', 'Stringer', 'Dirk',
'415 843-2991', '5420 Telegraph Av.', 'Oakland', 'CA', '94609')
;
insert into author
values('274-80-9391', 'Straight', 'Dick',
'415 834-2919', '5420 College Av.', 'Oakland', 'CA', '94609')
;
insert into author
values('756-30-7391', 'Karsen', 'Livia',
'415 534-9219', '5720 McAuley St.', 'Oakland', 'CA', '94609')
;
insert into author
values('724-80-9391', 'MacFeather', 'Stearns',
'415 354-7128', '44 Upland Hts.', 'Oakland', 'CA', '94612')
;
insert into author
values('427-17-2319', 'Dull', 'Ann',
'415 836-7128', '3410 Blonde St.', 'Palo Alto', 'CA', '94301')
;
insert into author
values('672-71-3249', 'Yokomoto', 'Akiko',
'415 935-4228', '3 Silver Ct.', 'Walnut Creek', 'CA', '94595')
;
insert into author
values('267-41-2394', 'O''Leary', 'Michael',
'408 286-2428', '22 Cleveland Av. #14', 'San Jose', 'CA', '95128')
;
insert into author
values('472-27-2349', 'Gringlesby', 'Burt',
'707 938-6445', 'PO Box 792', 'Covelo', 'CA', '95428')
;
insert into author
values('527-72-3246', 'Greene', 'Morningstar',
'615 297-2723', '22 Graybar Rd.', 'Nashville', 'TN', '37215')
;
insert into author
values('172-32-1176', 'White', 'Johnson',
'408 496-7223', '10932 Bigge Rd.', 'Menlo Park', 'CA', '94025')
;
insert into author
values('712-45-1867', 'del Castillo', 'Innes',
'615 996-8275', '2286 Cram Pl. #86', 'Ann Arbor', 'MI', '48105')
;
insert into author
values('846-92-7186', 'Hunter', 'Sheryl',
'415 836-7128', '3410 Blonde St.', 'Palo Alto', 'CA', '94301')
;
insert into author
values('486-29-1786', 'Locksley', 'Chastity',
'415 585-4620', '18 Broadway Av.', 'San Francisco', 'CA', '94130')
;
insert into author
values('648-92-1872', 'Blotchet-Halls', 'Reginald',
'503 745-6402', '55 Hillsdale Bl.', 'Corvallis', 'OR', '97330')
;
insert into author
values('341-22-1782', 'Smith', 'Meander',
'913 843-0462', '10 Misisipi Dr.', 'Lawrence', 'KS', '66044')
;


insert into publisher
values('1', 'New Age Books', '1 1st St','Boston', 'MA')
;
insert into publisher
values('2', 'Binnet & Hardley','2 2nd Ave.', 'Washington', 'DC')
;
insert into publisher
values('3', 'Algodata Infosystems', '3 3rd Dr.','Berkeley', 'CA')
;


insert into bookauthor
values('409-56-7008', '1-1032-1032-x', 1, .60)
;
insert into bookauthor
values('486-29-1786', '1-5555-5555-x', 1, 1.00)
;
insert into bookauthor
values('486-29-1786', '1-9999-9999-x', 1, 1.00)
;
insert into bookauthor
values('712-45-1867', '1-2222-2222-x', 1, 1.00)
;
insert into bookauthor
values('172-32-1176', '1-3333-3333-x', 1, 1.00)
;
insert into bookauthor
values('213-46-8915', '1-1032-1032-x', 2, .40)
;
insert into bookauthor
values('238-95-7766', '1-1035-1035-x', 1, 1.00)
;
insert into bookauthor
values('213-46-8915', '1-2075-2075-x', 1, 1.00)
;
insert into bookauthor
values('998-72-3567', '1-2091-2091-x', 1, .50)
;
insert into bookauthor
values('899-46-2035', '1-2091-2091-x', 2, .50)
;
insert into bookauthor
values('998-72-3567', '1-2106-2106-x', 1, 1.00)
;
insert into bookauthor
values('722-51-5454', '1-3021-3021-x', 1, .75)
;
insert into bookauthor
values('899-46-2035', '1-3021-3021-x', 2, .25)
;
insert into bookauthor
values('807-91-6654', '1-3218-3218-x', 1, 1.00)
;
insert into bookauthor
values('274-80-9391', '1-7832-7832-x', 1, 1.00)
;
insert into bookauthor
values('427-17-2319', '1-8888-8888-x', 1, .50)
;
insert into bookauthor
values('846-92-7186', '1-8888-8888-x', 2, .50)
;
insert into bookauthor
values('756-30-7391', '1-1372-1372-x', 1, .75)
;
insert into bookauthor
values('724-80-9391', '1-1372-1372-x', 2, .25)
;
insert into bookauthor
values('724-80-9391', '1-1111-1111-x', 1, .60)
;
insert into bookauthor
values('267-41-2394', '1-1111-1111-x', 2, .40)
;
insert into bookauthor
values('672-71-3249', '1-7777-7777-x', 1, .40)
;
insert into bookauthor
values('267-41-2394', '1-7777-7777-x', 2, .30)
;
insert into bookauthor
values('472-27-2349', '1-7777-7777-x', 3, .30)
;
insert into bookauthor
values('648-92-1872', '1-4203-4203-x', 1, 1.00)
;



insert into book
values ('1-8888-8888-x', 'Secrets of Silicon Valley',
'computer', '3', 40.00, 8000.00, 4095,
'1998-06-12')
;
insert into book
values ('1-1032-1032-x', 'The Busy Executive''s Database Guide',
'business', '3', 29.99, 5000.00, 4095,
'1998-06-12')
;
insert into book
values ('1-5555-5555-x', 'Emotional Security: A New Algorithm',
'psychology', '1', 17.99, 4000.00, 3336,
'1998-06-12')
;
insert into book
values ('1-3333-3333-x', 'Prolonged Data Deprivation: Four Case Studies',
'psychology', '1', 29.99, 2000.00, 4072,
'1998-06-12')
;
insert into book
values ('1-1111-1111-x', 'Cooking with Computers: Surreptitious Balance Sheets',
'business', '3', 21.95, 5000.00, 3876,
'1998-06-09')
;
insert into book
values ('1-2222-2222-x', 'Silicon Valley Gastronomic Treats',
'cooking', '2', 29.99, 0.00, 2032,
'1998-06-09')
;
insert into book
values ('1-7777-7777-x', 'Sushi, Anyone?',
'cooking', '2', 29.99, 8000.00, 4095,
'1998-06-12')
;
insert into book
values ('1-4203-4203-x', 'Fifty Years in Buckingham Palace Kitchens',
'cooking', '2', 21.95, 4000.00, 15096,
'1998-06-12')
;
insert into book
values ('1-1035-1035-x', 'But Is It User Friendly?',
'computer', '3', 42.95, 7000.00, 8780,
'1998-06-30')
;
insert into book
values('1-2075-2075-x', 'You Can Combat Computer Stress!',
'business', '1', 12.99, 10125.00, 18722,
'1998-06-15')
;
insert into book
values('1-2091-2091-x', 'Is Anger the Enemy?',
'psychology', '1', 21.95, 2275.00, 2045,
'1998-06-15')
;
insert into book
values('1-2106-2106-x', 'Life Without Fear',
'psychology', '1', 17.00, 6000.00, 111,
'1998-10-05')
;
insert into book
values('1-3021-3021-x', 'The Gourmet Microwave',
'cooking', '2', 12.99, 15000.00, 22246,
'1998-06-18')
;
insert into book
values('1-3218-3218-x',
'Onions, Leeks, and Garlic: Cooking Secrets of the Mediterranean',
'cooking', '2', 40.95, 7000.00, 375,
'1998-10-21')
;
insert into book (isbn, title, pub_id)
values('1-3026-3026-x', 'The Psychology of Computer Cooking', '2')
;
insert into book
values ('1-7832-7832-x', 'Straight Talk About Computers',
'business', '3', 29.99, 5000.00, 4095,
'1998-06-22')
;
insert into book
values('1-1372-1372-x',
'Computer Phobic and Non-Phobic Individuals: Behavior Variations',
'psychology', '1', 41.59, 7000.00, 375,
'1998-10-21')
;

insert into book (isbn, title, type, pub_id)
values('1-9999-9999-x', 'Net Etiquette', 'computer', '3')
;
";

return $bookpub_all_sql;
}


?>

</div>
</body>
</html>