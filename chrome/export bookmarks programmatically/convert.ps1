#credits: Mostly to tobibeer and Snak3d0c @ https://stackoverflow.com/questions/47345612/export-chrome-bookmarks-to-csv-file-using-powershell
#Path to chrome bookmarks
$pathToJsonFile = $Env:LOCALAPPDATA+"\Google\Chrome\User Data\Default\Bookmarks"

$htmlOut = 'bookmarks.html'
$htmlHeader = @'
<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!--This is an automatically generated file.
    It will be read and overwritten.
    Do Not Edit! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<Title>Bookmarks</Title>
<H1>Bookmarks</H1>
<DL><p>
'@

$htmlHeader | Out-File -FilePath $htmlOut -Force -Encoding utf8 #line59

#A nested function to enumerate bookmark folders
Function Get-BookmarkFolder {
	[cmdletbinding()]
	Param(
		[Parameter(Position=0,ValueFromPipeline=$True)]
		$Node
	)
	Process  {
		foreach ($child in $node.children) {
			$da = [math]::Round([double]$child.date_added / 1000000) #date_added - from microseconds (Google Chrome {dates}) to seconds 'standard' epoch.
			$dm = [math]::Round([double]$child.date_modified / 1000000) #date_modified - from microseconds (Google Chrome {dates}) to seconds 'standard' epoch.
			if ($child.type -eq 'Folder') {
			"    <DT><H3 FOLDED ADD_DATE=`"$($da)`">$($child.name)</H3>" | Out-File -FilePath $htmlOut -Append -Force -Encoding utf8
			"       <DL><p>" | Out-File -FilePath $htmlOut -Append -Force -Encoding utf8
			Get-BookmarkFolder $child
			"       </DL><p>" | Out-File -FilePath $htmlOut -Append -Force -Encoding utf8
			} else {
			"       <DT><a href=`"$($child.url)`" ADD_DATE=`"$($da)`">$($child.name)</a>" | Out-File -FilePath $htmlOut -Append -Encoding utf8
			}
		}
	}
}

$data = Get-content $pathToJsonFile -Encoding UTF8 | Out-String | ConvertFrom-Json
$sections = $data.roots.PSObject.Properties | select -ExpandProperty name
ForEach ($entry in $sections) {
    $data.roots.$entry | Get-BookmarkFolder
}
'</DL>' | Out-File -FilePath $htmlOut -Append -Force -Encoding utf8