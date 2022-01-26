import subprocess as sp

sp.run(['dir', '/b'], shell=True)
sp.run('dir /b', shell=True)

# capture stdout
proc = sp.Popen('dir /b', stdout=sp.PIPE, stderr=sp.PIPE, shell=True)
stdout, stderr = proc.communicate()
stdout.decode('utf8') # 'file1.txt\r\nfile2.txt\r\n'