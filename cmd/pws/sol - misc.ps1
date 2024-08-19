# add to path
$env:Path += ';./node_modules/.bin'
$env:Path = "$($env:Path);./node_modules/.bin"

# change window title
$Host.ui.RawUI.WindowTitle = 'mytitle'

# get first n line of command output
dir | select -first 3

# print table
$a = @()
$a += [pscustomobject]@{Name = 'John';  Job = 'Doctor'}
$a += [pscustomobject]@{Name = 'Jason'; Job = 'Engineer'}
$a += [pscustomobject]@{Name = 'Javad'; Job = 'Plumber'}
$a | Format-Table

# show dns records
Resolve-DnsName google.com
Resolve-DnsName github.com -Type TXT

# map ipv6 to ipv4
([ipaddress]'::0A00:1').MapToIPv4().IPAddressToString # 10.0.0.1

[ipaddress]$IPv6Address = "0000:0000:0000:0000:0192:0168:0001:0010";
$IPv4Mapped = $IPv6Address.MapToIPv4();
$IPv4Mapped.IPAddressToString # 0.1.0.16
