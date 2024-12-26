require('os').homedir() // best

process.env[process.platform==='win32'?'USERPROFILE':'HOME'] // process.env.HOME || process.env.USERPROFILE;

// if must be APPDATA:
process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share")
/*
	OS X          '/Users/user/Library/Preferences'
	Windows 8     'C:\Users\user\AppData\Roaming'
	Windows XP    'C:\Documents and Settings\user\Application Data'
	Linux         '/home/user/.local/share'
*/


// note
process.platform 'aix' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32'
process.platform 'aix|darwin|freebsd|linux|openbsd|sunos|win32'
'darwin' // mac
'win32'  // windows (even on 64 bit)