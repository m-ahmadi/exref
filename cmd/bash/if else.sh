if [ -d "$DIR" && ! -L "$DIR" && ! -f "$DIR"]; then				# missing ] error in cmder

fi


if [ -d "$DIR" ] && [ ! -L "$DIR" ] && [ ! -f "$DIR" ]; then

fi

if [ conditional expression ]
then
	statement1
	statement2
else
	statement3
fi

count=100
if [ $count -eq 100 ]
then
  echo "Count is 100"
fi
