import matplotlib.pyplot as plt # pip install matplotlib

plot(?x=range(len(y)), y=[], ?fmt='', *, ?data=None, **kwargs)
	plot(x, y, fmt, x2, y2, fmt2, ..., **kwargs)
	kwargs:
	agg_filter=                (m,n,3)float
	alpha=                     scalar|None
	animated=                  bool
	antialiased|aa=            bool
	clip_box=                  Bbox
	clip_on=                   bool
	clip_path=                 Patch|(Path, Transform)|None
	color|c=                   color
	contains=                  unknown
	dash_capstyle=             CapStyle|{'butt', 'projecting', 'round'}
	dash_joinstyle=            JoinStyle|{'miter', 'round', 'bevel'}
	dashes=                    sequence of floats (on/off ink in points)|(None, None)
	data=                      (2, N) array|two 1D arrays
	drawstyle|ds=              {'default', 'steps', 'steps-pre', 'steps-mid', 'steps-post'}, default: 'default'
	figure=                    Figure
	fillstyle=                 {'full', 'left', 'right', 'bottom', 'top', 'none'}
	gid=                       ''
	in_layout=                 bool
	label=                     object|''?
	linestyle|ls=              {'-', '--', '-.', ':', '', (offset, on-off-seq), ...}
	linewidth|lw=              float
	marker=                    ''|Path|MarkerStyle
	markeredgecolor|mec=       color
	markeredgewidth|mew=       float
	markerfacecolor|mfc=       color
	markerfacecoloralt|mfcalt= color
	markersize|ms=             float
	markevery=                 None| int | (int,int) | slice | list[int] | float | (float,float) | list[bool]
	path_effects=              AbstractPathEffect
	picker=                    float|callable[[Artist, Event], tuple[bool, dict]]
	pickradius=                float
	rasterized=                bool
	sketch_params=             (scale: float, length: float, randomness: float)
	snap=                      bool|None
	solid_capstyle=            CapStyle|{'butt', 'projecting', 'round'}
	solid_joinstyle=           JoinStyle|{'miter', 'round', 'bevel'}
	transform=                 matplotlib.transforms.Transform
	url=                       ''
	visible=                   bool
	xdata=                     1D array
	ydata=                     1D array
	zorder=                    float

legend(*args, ?handles=[Artist,..], ?labels=['',..], **kwargs)

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
	r g b        red green blue
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
plt.show()

# legend
plt.plot([1,2,3],[5,6,7], label='foo')
plt.plot([1,2,3],[6,7,8], label='bar')
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

a = np.round(np.random.uniform(1,10,20))
b = np.where(a%2==0, a+.3, None)
c = np.where(a%2==0, None, a-.3)
x = range(len(a))
plt.plot(x, a,'b', b,'rv', c,'g^')
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

# multiple figures
x1 = [1,2,3]
y1 = [4,5,6]
x2 = [1,3,5]
y2 = [6,5,4]
plot1 = plt.figure(1)
plt.plot(x1, y1)
plot2 = plt.figure(2)
plt.plot(x2, y2)
plt.show()

# multiple figures - interactive
from matplotlib import interactive
plt.figure(1)
x1 = [1,2,3]
y1 = [4,5,6]
plt.plot(x1, y1)
interactive(True)
plt.show()
plt.figure(2)
x2 = [1,3,5]
y2 = [6,5,4]
plt.plot(x2, y2)
plt.show()
interactive(False)
plt.show()