rem   this is a comment (use this, actual command that just does nothing)
::    this is a comment (known to have issues, essentially a blank label that can never be jumped to)

:: issues:
:: must use & character for inline comment
echo hello    & :: says hello
:: gives error inside nested logic (if else, for loops, etc)
:: may fail within setlocal ENABLEDELAYEDEXPANSION