# basic
plt.scatter([1,2,2,3], [4,2,3,1])
plt.show()

# color
plt.scatter([1,2,2,3], [4,2,3,1], c=[1,2,2,3])
plt.show()

# size
plt.scatter([1,2,2,3], [4,2,3,1], s=[20,100,100,20])
plt.show()

# color & size
plt.scatter([1,2,2,3], [4,2,3,1], c=[1,2,2,3], s=[20,100,100,20])
plt.show()

# title & label
fig, ax = plt.subplots()
ax.scatter([2,4.5,5,5,6,3,10,9.5,8], [53,35,91,72,60,62,85,78,99])
ax.set_title('Is there a relationship between these two variables?')
ax.set_xlabel('Hour Studying', fontsize=15)
ax.set_ylabel('Exam Score', fontsize=15)
ax.grid(True)
fig.tight_layout()
plt.show()