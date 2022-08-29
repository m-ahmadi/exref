import matplotlib.pyplot as plt

plt.pie([5,10,20,65], startangle=90)

plt.pie([5,10,20,65], autopct='%1.0f%%')
plt.pie([5,10,20,65], autopct='%.0f')

plt.pie([10,70,10], colors='cym')
plt.pie([60,40], colors=['r','b'])

fig1, ax1 = plt.subplots()
ax1.pie([10,30,60], explode=[0,0.1,0], labels=['a','b','c'], autopct='%1.1f%%', shadow=True, startangle=90)
ax1.axis('equal') # ensures pie drawn as circle

