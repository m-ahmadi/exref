# by name (must be first statement)
param($x)                    # one arg
param($x, $y)                # multiple args
param($z=3)                  # with default value
param([Int32]$x)             # type casted
param([Int32]$x=34)          # type cast with default value
param([Int32]$x, [string]$y) # multiple casted

# by position
$step = $args[0]