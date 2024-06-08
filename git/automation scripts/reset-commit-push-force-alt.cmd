@echo off
git add .
git commit --amend --no-edit --date=now
git push -f
