// include: /move.js
move('.square')
	.to(500, 200)
	.rotate(180)
	.scale(.5)
	.set('background-color', '#888')
	.set('border-color', 'black')
	.duration('2s')
	.skew(50, -10)
	.then()
		.set('opacity', 0)
		.duration('0.3s')
		.scale(0.1)
		.pop()
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-1 .box')
	.set('margin-left', 200)
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-2 .box')
	.add('margin-left', 200)
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-3 .box')
	.sub('margin-left', 100)
	.end();

move('#example-4 .box')
	.rotate(140)
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-5 .box')
	.set('background-color', 'blue')
	.duration('2s')
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-6 .box')
	.translate(300, 80)
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-7 .box')
	.x(300)
	.y(20)
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-8 .box')
	.x(300)
	.skew(50)
	.set('height', 20)
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-9 .box')
	.scale(3)
	.end();
// scaleX(n) and scaleY(n) are also available
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move('#example-10 .box1').x(400).end();
move('#example-10 .box2').ease('in').x(400).end();
move('#example-10 .box3').ease('out').x(400).end();
move('#example-10 .box4').ease('in-out').x(400).end();
move('#example-10 .box5').ease('snap').x(400).end();
move('#example-10 .box6').ease('cubic-bezier(0,1,1,0)').x(400).end();

setTimeout(function(){
	move('#example-10 .box1').x(0).end();
	move('#example-10 .box2').x(0).end();
	move('#example-10 .box3').x(0).end();
	move('#example-10 .box4').x(0).end();
	move('#example-10 .box5').x(0).end();
	move('#example-10 .box6').x(0).end();
}, 1200);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

move('#example-11 .box')
	.set('background-color', 'red')
	.duration(1000)
	.end(function(){
		move('#example-11 .box')
		.set('background-color', 'white')
		.end();
	});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

move('#example-12 .box')
	.set('background-color', 'blue')
	.delay('2s')
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var moveBack = move('#example-13 .box')
	.set('background-color', 'white')
	.x(0);

move('#example-13 .box')
	.set('background-color', 'red')
	.x(500)
	.then(moveBack)
	.end();

move('#example-13 .box2')
	.set('background-color', 'red')
	.x(500)
	.scale(.5)
	.rotate(60)
	.then()
	.rotate(30)
	.scale(1.5)
	.set('border-radius', 5)
	.set('background-color', 'white')
	.then()
	.set('opacity', 0)
	.pop()
	.pop()
	.end();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move.select = function(selector){
	return $(selector).get(0);
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move.defaults = {
	duration: 500
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
move.ease = {
	'in': 'ease-in'
	, 'out': 'ease-out'
	, 'in-out': 'ease-in-out'
	, 'snap': 'cubic-bezier(0,1,.5,1)'
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Easing functions
'in':                'ease-in'
'out':               'ease-out'
'in-out':            'ease-in-out'
'snap':              'cubic-bezier(0,1,.5,1)'
'linear':            'cubic-bezier(0.250, 0.250, 0.750, 0.750)'
'ease-in-quad':      'cubic-bezier(0.550, 0.085, 0.680, 0.530)'
'ease-in-cubic':     'cubic-bezier(0.550, 0.055, 0.675, 0.190)'
'ease-in-quart':     'cubic-bezier(0.895, 0.030, 0.685, 0.220)'
'ease-in-quint':     'cubic-bezier(0.755, 0.050, 0.855, 0.060)'
'ease-in-sine':      'cubic-bezier(0.470, 0.000, 0.745, 0.715)'
'ease-in-expo':      'cubic-bezier(0.950, 0.050, 0.795, 0.035)'
'ease-in-circ':      'cubic-bezier(0.600, 0.040, 0.980, 0.335)'
'ease-in-back':      'cubic-bezier(0.600, -0.280, 0.735, 0.045)'
'ease-out-quad':     'cubic-bezier(0.250, 0.460, 0.450, 0.940)'
'ease-out-cubic':    'cubic-bezier(0.215, 0.610, 0.355, 1.000)'
'ease-out-quart':    'cubic-bezier(0.165, 0.840, 0.440, 1.000)'
'ease-out-quint':    'cubic-bezier(0.230, 1.000, 0.320, 1.000)'
'ease-out-sine':     'cubic-bezier(0.390, 0.575, 0.565, 1.000)'
'ease-out-expo':     'cubic-bezier(0.190, 1.000, 0.220, 1.000)'
'ease-out-circ':     'cubic-bezier(0.075, 0.820, 0.165, 1.000)'
'ease-out-back':     'cubic-bezier(0.175, 0.885, 0.320, 1.275)'
'ease-out-quad':     'cubic-bezier(0.455, 0.030, 0.515, 0.955)'
'ease-out-cubic':    'cubic-bezier(0.645, 0.045, 0.355, 1.000)'
'ease-in-out-quart': 'cubic-bezier(0.770, 0.000, 0.175, 1.000)'
'ease-in-out-quint': 'cubic-bezier(0.860, 0.000, 0.070, 1.000)'
'ease-in-out-sine':  'cubic-bezier(0.445, 0.050, 0.550, 0.950)'
'ease-in-out-expo':  'cubic-bezier(1.000, 0.000, 0.000, 1.000)'
'ease-in-out-circ':  'cubic-bezier(0.785, 0.135, 0.150, 0.860)'
'ease-in-out-back':  'cubic-bezier(0.680, -0.550, 0.265, 1.550)'