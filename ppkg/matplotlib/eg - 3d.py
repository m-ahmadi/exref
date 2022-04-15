import numpy as np
import matplotlib.pyplot as plt

ax = plt.figure().add_subplot(projection='3d')

ax.plot([1,2,3], [1,2,3])
ax.plot([1,2,3], [1,2,3], [1,2,3], c='red')

ax.scatter([2,3,4], [2,3,4], c='cyan')
ax.scatter([2,3,4], [2,3,4], [2,3,4], c='magenta')

ax.set_xlabel('X')
ax.set_ylabel('Y')
ax.set_zlabel('Z')

plt.show()