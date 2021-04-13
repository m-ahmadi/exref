# pip install matplotlib

import matplotlib.pyplot as plt 

plt.plot([1,2,3],[5,6,7])
plt.xlabel('x - axis') 
plt.ylabel('y - axis') 
plt.title('My first graph!')
plt.legend()
plt.show()

plt.scatter(x=[1,2,3], y=[2,3,2], s=[7e4,3e4,1e4], c=['red','green','blue'], alpha=0.5)
plt.show()