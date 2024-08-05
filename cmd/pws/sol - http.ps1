iwr https://jsonplaceholder.typicode.com/posts/1 -O f.json;
iwr http://ipv4.download.thinkbroadband.com/5MB.zip -O f.zip

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# json

$res = Invoke-RestMethod -Uri 'https://jsonplaceholder.typicode.com/users/1'
$res.name # 'Leanne Graham'
$res | ft -Property name, email, website

# manual parse
$resp = Invoke-WebRequest -Uri 'https://jsonplaceholder.typicode.com/users/3'
$resp.Content.GetType().Name # String
$res = ConvertFrom-Json $resp.Content
$res.name # 'Clementine Bauch'
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@