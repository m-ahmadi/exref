$arr = @('a', 'b', 'c')

for ($i=0; $i -lt $arr.length; $i++) {
	$array[$i]
}

$i = 0;
while ($i -lt $arr.length) {
	$arr[$i]
	$i += 1
}
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# ForEach-Object (`foreach` alias is keyword-like too)

$arr | ForEach-Object { 'here kitty=='+$_ } # same as:
$arr | %              { 'here kitty=='+$_ }
$arr | foreach        { 'here kitty=='+$_ }

# only with `foreach`
foreach($i in $arr) { $i + ' foo' }
foreach($i in (dir)) { $i | select Name }

# get nth column of a command's output (like for /f)
cmdow /t | %{ $_.split()[-1] }
foreach( $i in (cmdow /t) ) { $i.split()[-1] }

# iterate over object properties
$documents.PSObject.Properties | ForEach-Object {
	$_.Name
	$_.Value
}
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@