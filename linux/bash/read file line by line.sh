# better
filename="file.txt"
while IFS='' read -r line || [[ -n "$line" ]]; do
  echo "line: $line"
done < "$filename"

# another
filename="file.txt"
while read -r line; do
  echo "line: $line"
done < "$filename"
