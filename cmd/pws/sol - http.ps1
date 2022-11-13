iwr https://jsonplaceholder.typicode.com/posts/1 -O f.json;
iwr http://ipv4.download.thinkbroadband.com/5MB.zip -O f.zip

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# more
$url = 'https://jsonplaceholder.typicode.com/posts/1';

$req = Invoke-WebRequest -Uri $url;
$req.Content

$res = Invoke-RestMethod -Uri $url;
$res.title
Invoke-RestMethod -Uri $url | ft -Property title, id
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@