import subprocess as sp

sp.run(['dir', '/b'], shell=True)
sp.run('dir /b', shell=True)

# capture stdout
stdout = sp.run('dir /b', capture_output=True, shell=True).stdout
# or
proc = sp.Popen('dir /b', stdout=sp.PIPE, stderr=sp.PIPE, shell=True)
stdout, stderr = proc.communicate()

out = stdout.strip().decode('utf8').splitlines()
out # ['file1.txt', 'file2.txt']
