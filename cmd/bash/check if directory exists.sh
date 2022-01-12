if [ -d "$DIR" ]; then
	# will enter here if:
	#   $DIR exists, even if it contains spaces
	#   $DIR is a file
	#   $DIR is a symbolic link
fi


if [ -d "$DIR"] && [ ! -L "$DIR" ] && [ ! -f "$DIR" ]; then
	# will enter here if:
	#   $DIR does not exist
	#   $DIR is   not a file
	#   $DIR is   not a symbolic link
fi