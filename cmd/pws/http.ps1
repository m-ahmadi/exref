$url = 'https://jsonplaceholder.typicode.com/posts/1'

$req = Invoke-WebRequest -URI $url
$req.Content

$res = Invoke-RestMethod -Uri $url
$res.title

Invoke-RestMethod -Uri $url | ft -Property title, id

# download file
$fileUrl = 'https://file-examples.com/wp-content/uploads/2017/02/zip_2MB.zip'
Invoke-WebRequest $fileUrl -OutFile C:\file.zip