# generate random vector from normal distr and plot histogram
set.seed(0)
x <- rnorm(1000)
hist(x)

# plot standardized and log-transformed versions of the vector
z <- (x - mean(x)) / sd(x) # 
g <- log(X)
par(mfrow = c(1,2))
hist(z)
hist(g)

# same thing except with random vector form exponential distr
set.seed(0)
x <- rexp(1000)
par(mfrow = c(1,1))
hist(x)
z <- (x- mean(x)) / sd(x)
g <- log(x)
par(mfrow = c(1,2))
hist(z)
hist(g)
