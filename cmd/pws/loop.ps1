$arr = @('a', 'b', 'c')

foreach ($i in $arr) {
	$i + ' foo'
}

$arr | foreach { $_ }

for ($i=0; $i -lt $arr.length; $i++) {
	$array[$i]
}

$i = 0;
while ($i -lt $arr.length) {
	$arr[$i]
	$i += 1
}