# single line comment
'
	multiline comment
'

# types
10.5 55    # numeric
1L 55L     # integer
4i 9+3i    # complex
'foo'      # character (string)
TRUE FALSE # logical (boolean)

class(TRUE) # check type

# operator
+ - * /          # arithmetic
	^              #   exponent
	%%             #   remainder 
	%/%            #   integer division
<- -> <<- ->>    # assignment
== != >	 < >= <= # comparison
! && || & |      # logical
:    # sequence generator
%in% # does elem belong to vector
%*%  # matrix multiplication

# structs
c(1,2,3,4)             # vector
c('a','b','c')         # ...
list('a','b','c')      # list
matrix(c(1,2,3,4),2,2) # matrix
array(1:10)            # array
array(c('a','b'))      # ...
array(1:10,c(5,5))     # ... 2d

# some arr ops
array(c('green','yellow'),c(2,4))

foo <- list(1,2,3)
foo <- append(foo,4)

foo <- list(1,2,3)
foo <- foo[-1]

seq(1,4)
seq(-4,4,length=100)

# var
a <- 'foo'
a <- 2
a <- 3
3 -> a
g <<- 3 # global assignment
3 ->> g

# cond
if () {}
if () {} else if () {}
if () {} else if () {} else {}

# loop
for (i in 1:20) {
	if (i %% 2 == 0) { next }
	if (i == 17) { break }
  print(i)
}

i <- 0
while (i < 20) {
	i <- i + 1
	print(i)
	if (i %% 2 == 0) { next }
	if (i == 17) { break }
}

# fn
myfn <- function(a, b=25, name='john') {
	num <- a * b
	res <- paste(c(name, 'is', num, 'years old'), collapse=' ')
	return(res)
}
