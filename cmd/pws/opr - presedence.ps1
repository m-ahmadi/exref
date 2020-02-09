# the ones on same line or same group have equal precedence

# first
$() @() ()
.
::
[0]
[int]
-split
-join
,
++ -- +$n -$n
! -not
..
-f
-
* / %
+ -

# second
-split
-join
-is -isnot -as
-eq -ne -gt -gt -lt -le
-like -notlike
-match -notmatch
-in -notIn
-contains -notContains
-replace

# third
-band -bnot -bor -bxor
-and -or -xor
.
&
|
> >> 2> 2>> 2>&1
= += -= *= /= %=