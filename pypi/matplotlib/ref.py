import matplotlib.pyplot as plt # pip install matplotlib

# https://matplotlib.org/stable/api/index.html#modules
# https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.html#functions

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
	drawstyle|ds=              'default|steps|steps-pre|steps-mid|steps-post'
	figure=                    Figure
	fillstyle=                 'full|left|right|bottom|top|none'
	gid=                       ''
	in_layout=                 bool
	label=                     object|''?
	linestyle|ls=              '-|--|-.|:' | (offset, on-off-seq),
	linewidth|lw=              float
	marker=                    ''|Path|MarkerStyle
	markeredgecolor|mec=       color
	markeredgewidth|mew=       float
	markerfacecolor|mfc=       color
	markerfacecoloralt|mfcalt= color
	markersize|ms=             float
	markevery=                 None | int | (int,int) | slice | list<int> | float | (float,float) | list<bool>
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

subplots(nrows=1, ncols=1, *, ?sharex=False, ?sharey=False, ?squeeze=True, ?subplot_kw=None|{}, ?gridspec_kw=None|{}, **fig_kw={'constrained_layout':False,..})

subplot(nrows=1, ncols=1, index=1, **kwargs)
subplot(pos=000, **kwargs)
subplot(**kwargs)
subplot(ax)

figure(num=1|''|Figure, figsize=(0.,0.), dpi=100.0, facecolor='white', edgecolor='white', frameon=True, ?FigureClass, clear=False, tight_layout=False|{}, constrained_layout=False, **kwargs)

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