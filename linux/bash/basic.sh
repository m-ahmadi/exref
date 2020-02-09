#!/bin/bash (first line of a bash file must be this)

chmod +x file       # marks a file executable
bash file/to/run.sh # run non-executable file

# any file can be executed if first line of file is a path to the program that should interpret the file.
# by convention bash files have no extension, you can use .sh or any other extension.