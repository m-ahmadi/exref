import matplotlib.pyplot as plt # pip install matplotlib

plot(?x=range(len(y)), y=[], ?fmt='', *, ?data=None, **kwargs)
	plot(x, y, fmt, x2, y2, fmt2, ..., **kwargs)
	kwargs:
		markevery=[]
		linestyle=''
		marker=''

fmt= '''
marker
	. , o        point pixel circle
	v ^ < >      triangle: ↓ ↑ ← →
	1 2 3 4      tri:      ↓ ↑ ← →
	s p h H 8    square pentagon hexagon1 hexagon2 octagon
	* D d        star diamond diamondthin
	+ P x X      plus plusfill x xfill
	| _          vline hline
	$✅$         custom char?

line style
	- -- -. :    solid dashed dash-dot dotted
color
	r g b        red green blue yellow
	k w          black white
	c m y        cyan magenta yellow
'''
#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# examples

# serie
plt.plot([1,2,3],[5,6,7])
plt.xlabel('x - axis') 
plt.ylabel('y - axis') 
plt.title('My first graph!')
plt.legend()
plt.show()

# multi series
t = np.arange(25)
plt.plot(t,t,'r--', t,t**2,'bs', t,t**2.2,'g^')
plt.show()

a = np.round(np.random.uniform(1,10,20))
b = np.where(a%2==0, a, None)
c = np.where(a%2==0, None, a)
x = range(len(a))
plt.plot(x, a,'b', b,'go', c,'ro')
plt.show()

y1 = [1, 3, 3, None, None, 5, 8, 9]
y2 = [2, None, 5, None, 4, None, 3, 2]
x = range(len(y1))
plt.plot(x, y1, '-go')
plt.plot(x, y2, '-ro')
plt.show()

# scatter
plt.scatter(x=[1,2,3], y=[2,3,2], s=[7e4,3e4,1e4], c=['red','green','blue'], alpha=0.5)
plt.show()