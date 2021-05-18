// using dism (needs dism v10+)

// 1. extract install.esd from .iso (with PowerISO or some other way)

// 2. choose index
dism /Get-WimInfo /WimFile:install.esd

// 3. convert
dism /export-image /SourceImageFile:install.esd /SourceIndex:1 /DestinationImageFile:install.wim /Compress:max /CheckIntegrity

// done
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// using NTLite software

/*
	1. make usb from .iso with rufus
	2. add usb drive in NTLite
	3. export wim
	done
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// note:
// you can replace converted wim with the install.esd inside the .iso afterwards