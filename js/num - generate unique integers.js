function uInt() {
	var a = ( "" + performance.now() ).split(".");
	return parseInt(a[0]+a[1], 10);
}

performance.now() // best
744601.4950000001
744602.025
744602.3150000001
744602.5300000001
744602.7550000001
744602.9550000001
744603.14
744603.3200000001
744603.505
744603.7150000001

Math.randorm() * 10
2
5
7
(2) 4
1
(2) 8
9
5

Math.randorm() * 100
64
33
39
14
79
11
9
72
10
99

// bad:
Math.floor( performance.now() )
(3) 691623
(4) 691624
(3) 691625

new Date().getTime() & 0xffffffff
1156558045
(4) 1156558046
(5) 1156558047

new Date().valueOf()
1495805223059
(5) 1495805223060
(4) 1495805223061


// in a row
for (var i = 0; i < 10; i+=1) { console.log( ***** ) }