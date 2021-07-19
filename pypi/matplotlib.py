import matplotlib.pyplot as plt # pip install matplotlib

plot(?x=range(len(y)), y=[], ?fmt='', *, ?data=None, **kwargs)
	plot(x, y, fmt, x2, y2, fmt2, ..., **kwargs)
	kwargs:
		markevery=[]

# examples
t = np.arange(25)
plt.plot(t, t, 'r--', t, t**2, 'bs', t, t**3, 'g^')
plt.show()

plt.plot([1,2,3],[5,6,7])
plt.xlabel('x - axis') 
plt.ylabel('y - axis') 
plt.title('My first graph!')
plt.legend()
plt.show()

plt.scatter(x=[1,2,3], y=[2,3,2], s=[7e4,3e4,1e4], c=['red','green','blue'], alpha=0.5)
plt.show()

# fmt string
'''
marker
	.        point
	,        pixel
	o        circle
	v ^ < >  triangle
	v        triangle_down
	^        triangle_up
	<        triangle_left
	>        triangle_right
	1 2 3 4  tri down up left right
	1        tri_down
	2        tri_up
	3        tri_left
	4        tri_right
	8 s p    octagon square pentagon
	8        octagon
	s        square
	p        pentagon
	P        plus (filled)
	*        star
	h        hexagon1
	H        hexagon2
	+        plus
	x        x
	X        x (filled)
	D        diamond
	d        thin_diamond
	|        vline
	_        hline
	$✅$     custom char

line style
	-        solid line style
	--       dashed line style
	-        dash-dot line style
	:        dotted line style

color
	b        blue
	g        green
	r        red
	c        cyan
	m        magenta
	y        yellow
	k        black
	w    white
'''

