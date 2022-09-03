# https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_operators

+ - * / %               # arithmetic
=  +=  -=  *=  /=  %=   # assignment
-eq -ne -gt -ge -lt -le # equality
-and -or -not ! -xor    # logical
> >> 2> 2>> 2>&1        # redirect
++ -- +$n -$n           # unary
-split -join            # string related
-as                     # convert type
&& ||                   # pipeline chain (same as cmd)
?:                      # ternay
??                      # null coalescing
??=                     # null-coalescing assignment
?. ?[]                  # null-conditional

# special
( )  # grouping
$( ) # subexpression
@( ) # array subexpression (creates array from whats inside)
@{ } # hash
&    # call/background (v6+)
[ ]  # index/cast
-f   # format
|    # pipeline
..   # range
.    # member access
,    # binary/unary
::   # static member
`    # word-wrap/string escape

# NOT an operator but an alias
%{}  # alias for ForEach-Object (gal %)
?{}  # alias for Where-Object (gal ?)

# comparison
-match -notmatch -replace         # regex
-like -notlike                    # wildcard
-is -isnot                        # type
-bAND -bOR -bXOR -bNOT            # bitwise
-contains -notcontains -in -notin # containment
