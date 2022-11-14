from subprocess import run
from itertools import cycle
from os import unlink

zones = [
	[0,    0,   960, 520],
	[960,  0,   480, 520],
	[1440, 0,   480, 520],
	
	[0,    520, 960, 520],
	[960,  520, 480, 520],
	[1440, 520, 480, 520],
]

stdout = run('cmdow /t /b', capture_output=True, shell=True).stdout
handles = [ i.split(' ')[0] for i in stdout.strip().decode('utf8','replace').splitlines() ]

zones = cycle(zones)

s1 = ''
s2 = ''

for handle, zone in zip(handles, zones):
	x, y, w, h = zone
	s1 += f'cmdow {handle} /siz {w} {h}\n';
	s2 += f'cmdow {handle} /mov {x} {y}\n';


s = f'''@echo off

cmdow /tv

{s1}
{s2}'''

with open('r.cmd', 'w') as f: f.write(s)
run('r.cmd', shell=True)
unlink('r.cmd')
