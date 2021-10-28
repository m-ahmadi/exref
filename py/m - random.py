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
random.getrandbits(k

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