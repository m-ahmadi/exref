if [ conditional expression ]; then
	statement1
fi

if [ conditional expression ]; then
	statement1
else
	statement2
fi

if [ conditional expression1 ]; then
	statement1
elif [ conditional expression2 ]; then
	statement2
else
	statement3
fi

# https://www.gnu.org/software/bash/manual/bash.html#Bash-Conditional-Expressions
# https://ss64.com/bash/test.html

[ -eq -ne -lt -le -gt -ge ]

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# compare strings
if [ "foo" = "foo" ]; then
	echo "true"
fi

# does path exists and is directory (and not symlink)
if [ -d "$DIR" && ! -L "$DIR" && ! -f "$DIR"]; then     # missing ] error in cmder
	echo "true"
fi

if [ -d "$DIR" ] && [ ! -L "$DIR" ] && [ ! -f "$DIR" ]; then
	echo "true"
fi

# compare number
count=100
if [ $count -eq 100 ]; then
	echo "Count is 100"
fi

if [ $count -gt 100 ]; then
	echo "Count is greater than 100"
fi

# check for empty string
if [ -z "${VAR}" ]; then
	echo "true"
fi

# check for empty string - unset|empty|non-empty comparison
#                       U E N
[ -z "${VAR}" ]       # 1 1 0
[ -z "${VAR+set}" ]   # 1 0 0
[ -z "${VAR-unset}" ] # 0 1 0
[ -n "${VAR}" ]       # 0 0 1
[ -n "${VAR+set}" ]   # 0 1 1
[ -n "${VAR-unset}" ] # 1 0 1

# check output of a command
if [ -z "$(git status --porcelain)" ]; then
	echo 'unsaved changes'
fi
