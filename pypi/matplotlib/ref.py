import matplotlib.pyplot as plt # pip install matplotlib

# https://matplotlib.org/stable/api/index.html#modules
# https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.html#functions

plot(?x=range(len(y)), y=[], ?fmt='', *, ?data=None, **kwargs)
plot(x, y, fmt, x2, y2, fmt2, ..., **kwargs)
	kwargs:
	agg_filter=                lambda i=(m,n,3): (m,n,3)
	alpha=                     scalar|None
	animated=                  bool
	antialiased|aa=            bool
	clip_box=                  Bbox
	clip_on=                   bool
	clip_path=                 Patch | (Path,Transform) | None
	color|c=                   ''
	contains=                  unknown
	dash_capstyle=             CapStyle | 'butt|projecting|round'
	dash_joinstyle=            JoinStyle | 'miter|round|evel'
	dashes=                    [0.,..] | (None, None)
	data=                      (2, N) array | two 1D arrays
	drawstyle|ds=              'default|steps|steps-pre|steps-mid|steps-post'
	figure=                    Figure
	fillstyle=                 'full|left|right|bottom|top|none'
	gid=                       ''
	in_layout=                 bool
	label=                     object|''?
	linestyle|ls=              '-|--|-.|:' | (offset, on-off-seq),
	linewidth|lw=              rcParams['lines.linewidth']=1.5
	marker=                    '' | Path | MarkerStyle
	markeredgecolor|mec=       ''
	markeredgewidth|mew=       0.
	markerfacecolor|mfc=       ''
	markerfacecoloralt|mfcalt= ''
	markersize|ms=             rcParams['lines.markersize']=6.0
	markevery=                 None | 0 | (0,0) | slice | [0,..] | 0. | (0.,0.) | list<bool>
	path_effects=              AbstractPathEffect
	picker=                    0. | callable[[Artist, Event], tuple[bool, dict]]
	pickradius=                0.
	rasterized=                bool
	sketch_params=             (scale: 0., length: 0., randomness: 0.)
	snap=                      bool|None
	solid_capstyle=            CapStyle | 'butt|projecting|round'
	solid_joinstyle=           JoinStyle | 'miter|round|evel'
	transform=                 matplotlib.transforms.Transform
	url=                       ''
	visible=                   bool
	xdata=                     1D array
	ydata=                     1D array
	zorder=                    0.

legend(*args, ?handles=[Artist,..], ?labels=['',..], **kwargs)
	loc=                       rcParams['legend.loc']='best' | 'upper|lower|center left|right|center' | (0.,0.)

subplots(nrows=1, ncols=1, *, ?sharex=False, ?sharey=False, ?squeeze=True, ?subplot_kw=None|{}, ?gridspec_kw=None|{}, **fig_kw={'constrained_layout':False,..})

subplot(nrows=1, ncols=1, index=1, **kwargs)
subplot(pos=000, **kwargs)
subplot(**kwargs)
subplot(ax)

figure(num=1|''|Figure, figsize=(6.4,4.8), dpi=100.0, facecolor='white', edgecolor='white', frameon=True, ?FigureClass, clear=False, tight_layout=False|{}, constrained_layout=False, **kwargs)
	# defaults: plt.rcParams['figure.*']

text(x=0., y=0., s='', fontdict=None, **kwargs)
	fontfamily|family='serif|sans-serif|cursive|fantasy|monospace|...'
	fontsize|size=0.|'xx-small|x-small|small|medium|large|x-large|xx-large'
	horizontalalignment|ha='center|right|left'
	verticalalignment|va='center|top|bottom|baseline|center_baseline'
	transform=Transform

scatter(
	x=0.|[0,..],
	y=0.|[0.,..],
	s=None | 0. | [rcParams['lines.markersize']**2,..],
	c=None | 0 | '' | [0|''|[0,0,0],..],
	marker=None | rcParams['scatter.marker']='o',
	cmap='viridis' | Colormap,
	norm=colors.Normalize,
	vmin=None | 0.,
	vmax=None | 0.,
	alpha=None | 0>=int<=1,
	linewidths=rcParams['lines.linewidth']=1.5,
	*,
	edgecolors=rcParams['scatter.edgecolors']='face|none' | None | '' | ['',..],
	plotnonfinite=False, data=None, **kwargs
)

fig  = plt.gcf() # get current figure
axes = plt.gca() # ... axes

plt.savefig(fname='', *, dpi='figure'|0., format=None|'png|pdf|svg|eps', metadata=None, bbox_inches=None|'tight|...'|Bbox, pad_inches=0.1, facecolor='auto', edgecolor='auto', ?backend=None, **kwargs)

ax.tick_params(labelbottom=False, labelleft=False)
ax.set_xticklabels([])

fmt= '''
marker
	. , o        point pixel circle
	v ^ < >      triangle: ↓ ↑ ← →
	1 2 3 4      tri:      ↓ ↑ ← →
	s p h H 8    square pentagon hexagon1 hexagon2 octagon
	* D d        star diamond diamondthin
	+ P x X      plus plusfill x xfill
	| _          vline hline
	$\...$       custom char
		\\alpha  \\beta  \gamma  \sigma  \infty
		\spadesuit  \heartsuit  \diamondsuit  \clubsuit
		\\bigodot  \\bigotimes  \\bigoplus  \imath  \\bowtie
		\\bigtriangleup  \\bigtriangledown  \oslash
		\ast  \\times  \circ  \\bullet  \star  +
		\Theta  \Xi  \Phi
		\$   \#   \%  \S
		mathrm{M}    remove italic of M

line style
	- -- -. :    solid dashed dash-dot dotted
color
	r g b        red green blue
	k w          black white
	c m y        cyan magenta yellow
'''

# shortcuts (in ui)
'''
h       home
c       back
v       forward
o       zoom
p       pan
x       .. x only
y       .. y only
ctrl    .. fix aspect ratio
f       full screen
'''