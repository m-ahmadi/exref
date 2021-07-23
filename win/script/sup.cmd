@echo off

start c:\#htdocs
start %desk%\LiveReload.appref-ms
start %des%\foo.lnk /max
start %home%\bar

start chrome local
start chrome local/foo/bar

start "title" cmd /k "command & ..."
start "cmd" cmd /k "pushd D:\xampp\htdocs\repo && code ."

npp