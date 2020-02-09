VARNAME=VALUE

echo $VARNAME
echo ${VARNAME}
# $var and ${var} are kinda the same

# expand:
string=foo
echo ${string}bar # foobar
echo $stringbar

# wrap in double quotes when referencing
"$DIRECTORY"