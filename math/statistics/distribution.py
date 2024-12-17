import numpy as np
import matplotlib.pyplot as plt

def get_distr(a): # naive
	idx = np.arange(a.min(), a.max(), 0.25)
	last_idx = len(idx) - 1
	distr = []
	for i,v in enumerate(idx):
		if i == 0 or i == last_idx:
			distr.append(a[a==v].size)
			continue
		prev, next = idx[i-1], idx[i+1]
		matches = a[(a > prev) & (a < next)]
		distr.append(matches.size)
	return distr


x = np.random.randn(100)
x_distr = get_distr(x)

# compare with a normal way
fig, (ax1, ax2) = plt.subplots(2)
ax1.plot(x_distr) # my way
ax2.hist(x)       # normal way
plt.show()
