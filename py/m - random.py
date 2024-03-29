import random
# https://docs.python.org/3/library/random.html

# bookkeeping
random.seed(a=None, version=2)
random.getstate()
random.setstate(state)

# byte
random.randbytes(n)

# int
random.randrange(stop)
random.randrange(start, stop, ?step)
random.randint(a, b)
random.getrandbits(k)

# sequence
random.choice(seq)
random.choices(population, weights=None, *, cum_weights=None, k=1)
random.shuffle(x, ?random)
random.sample(population, k, *, counts=None)

# real-valued distributions
random.random()
random.uniform(a, b)
random.triangular(low, high, mode)
random.betavariate(alpha, beta)
random.expovariate(lambd)
random.gammavariate(alpha, beta)
random.gauss(mu, sigma)
random.lognormvariate(mu, sigma)
random.normalvariate(mu, sigma)
random.vonmisesvariate(mu, kappa)
random.paretovariate(alpha)
random.weibullvariate(alpha, beta)

#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

a = [1,2,3]
random.shuffle(a)
a # [2,1,3]

# int between 2 nums
random.randrange(5, 10) # 8

# float between 2 nums
random.uniform(1.5, 2) # 1.850423389168346