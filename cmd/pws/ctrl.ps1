# if else
$fruit = 'apple';

if ($fruit -eq 'orange') {
	'We found an orange'
} elseif ($fruit -eq 'apple') {
	'We found a company'
} else {
	'We sucked'
}

# ternary
$result = if ($cond) {'true'} else {'false'}
write-host $(if ($cond) {'true'} else {'false'})

# ternary - powershell v7+
0 ? 'yes' : 'no' # 'no'
1 ? 'yes' : 'no' # 'yes'

# exit script
exit

exit 1

throw

Write-Error # non-terminating errors