process.env
process.platform 'aix' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32'
'darwin' // Mac
'win32'  // Windows (even on 64 bit)


process.env.APPDATA ||
(process.platform == 'darwin' ? process.env.HOME + 'Library/Preferences' : '/var/local')

/*
	The expected result is:
	OS X - '/Users/user/Library/Preferences'
	Windows 8 - 'C:\Users\User\AppData\Roaming'
	Windows XP - 'C:\Documents and Settings\User\Application Data'
	Linux - '/var/local'

	on linux box /var/local needs sudo permission. Shouldn't this be somewhere that doesn't require sudo?
			
	It is really dependent on the type of app you are making.
	If you are running a shared config between all users,
	- you may wish to create a folder with permissions to write on installation,
	- alternatively you could move to the users Home directory (process.env.HOME).
	However, the OSX link should probably be /Library/Application Support/ 
	- so they are all common application paths rather than the OSX link pointing to the users preferences.
				
	On Linux, it should probably be process.env.HOME + ".local/share" 
	- or simply process.env.HOME with an application .dotfile

	From here, you can likely tailor it to whatever suits your needs for your particular application.
	
	
	----------------------------
	C:\Documents and Settings\JohnD\Application Data - Windows XP
	C:\Users\JohnD\AppData\Roaming                   - Windows Vista and Up
	/Users/JohnD/Library/Preferences                 - MacOS
*/