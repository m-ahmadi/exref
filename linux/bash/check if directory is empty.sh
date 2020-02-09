if [ -z "$(ls -A /path/to/dir)" ]; then
	echo "Empty"
else
	echo "Not Empty"
fi
