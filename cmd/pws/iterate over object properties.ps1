$documents.PSObject.Properties | ForEach-Object {
	$_.Name
	$_.Value
}