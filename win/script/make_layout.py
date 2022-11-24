from subprocess import run
from sys import argv
from pathlib import Path

script = Path(argv[0]).name


a = run('cmdow /t /p /f /b', capture_output=True, shell=True).stdout.strip().decode('utf8', 'replace').splitlines()
a = [ i.split() for i in a ]
a = [ [*row[:12], ' '.join(row[12:])] for row in a ]


s1, s2, s3, s4 = '', '', '', ''

for i in a:
	handle, lev, pid, *_ = i
	image, caption = i[-2:]
	mmr, ai, ed, vh = i[3:7]
	x, y, w, h = i[7:11]
	
	
	t = caption.split(' - ')
	if len(t)>1 and script in t[-1]:
		continue
	
	if 'IGNORE_ME' in caption:
		continue
	
	# ignore maximized & minimized windows
	if mmr != 'Res': continue
	
	# only ignore minimized windows
	# if mmr == 'Min': continue
	
	cpt = f'"{caption}"'
	
	if 'firefox' in caption:
		cpt = '*firefox*'
	
	s1 += f'cmdow {cpt} /{mmr}\n'
	s2 += f'cmdow {cpt} /siz {w} {h}\n'
	s3 += f'cmdow {cpt} /mov {x} {y}\n'
	
	if ai == 'Act':
		s4 += f'cmdow "{cpt}" /{ai}\n'


s = f'''@echo off

cmdow /ma

{s1}
{s2}
{s3}
{s4}'''

filename = argv[1] if len(argv)>1 else 'layout'
with open(filename+'.cmd', 'w') as f:
	f.write(s)

