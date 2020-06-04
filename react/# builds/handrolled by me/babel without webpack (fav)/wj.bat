@echo off
call wset.bat
babel src -d public/js --presets @babel/react -x .jsx -w