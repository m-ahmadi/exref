# string, number, boolean. everything else is object?

''.GetType().Name      # String

(1).GetType().Name     # Int32

$true.GetType().Name   # Boolean
$false.GetType().Name  # Boolean
(true).GetType()       # err

$null                  # null value
$null.GetType().Name   # err

(1,2,3).GetType().Name # Object[]

# numbers
7                   # Int32
32                  # Int32
2147483647          # Int32
2147483648          # Int64
9223372036854775807 # Int 64
9223372036854775808 # Decimal

(32).GetType().Name # int32
32 -is [int32]      # true
32 -is 'int32'      # true
32 -is 'int64'      # false

#type        alias       description
[byte]       ---         # Byte (unsigned)
[sbyte]      ---         # Byte (signed)
[Int16]      [short]     # 16-bit integer                     
[UInt16]     [ushort]    # 16-bit integer (unsigned)          
[Int32]      [int]       # 32-bit integer                     
[UInt32]     [uint]      # 32-bit integer (unsigned)          
[Int64]      [long]      # 64-bit integer                     
[UInt64]     [ulong]     # 64-bit integer (unsigned)          
[single]     [float]     # Single precision floating point    
[double]     ---         # Double precision floating point
[decimal]    ---         # 128-bit floating point
[bigint]     ---         # BigInteger Struct: arbitrarily large signed integer

# type and multiplier suffix
# type suffix
1l     # long
1d     # decimal
# v6.2+ type suffix
1y     # signed byte
1uy    # unsigned byte
1s	   # short
1us    # unsigned short
1u     # unsigned int or long
1ul    # unsigned long
# multiplier suffix
1kb	   # kilobyte
1mb	   # megabyte
1gb	   # gigabyte
1tb	   # terabyte
1pb	   # petabyte