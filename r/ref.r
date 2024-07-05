# random generation
set.seed(0)
x <- rnorm(250)  # normal distr
x <- rlnorm(250) # lognormal distr
x <- rexp(250)   # exponential distr

# stats
mean(c(1,2,3)) # 2
sd(c(1,2,3))   # 1
log(12)        # 2.484907
log(c(12,13))  # 2.484907 2.564949

# plotting
par(mfrow=c(1,1))
hist(c(1,2,1,56,79,2,1))

par(mfrow=c(1,2))
hist(c(1,2,1,56,79,2,1))
hist(c(1,2,1,56,79,2,1))

# docs
help('rnorm')
