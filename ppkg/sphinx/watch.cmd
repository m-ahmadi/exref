@echo off

start "" cmd /k nodemon -x sphinx-build -a -j=auto source build -w ./source -e rst,py
start "" cmd /k livereload ./source -e rst,py -w 5000 -d
