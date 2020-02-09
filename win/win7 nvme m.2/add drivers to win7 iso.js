// 1. extract the following from win7.iso (with PowerISO)
sources/install.esd
sources/boot.wim
// 2. convert install.esd to install.wim
dism /Get-WimInfo /WimFile:install.esd
dism /export-image /SourceImageFile:install.esd /SourceIndex:1 /DestinationImageFile:install.wim /Compress:max /CheckIntegrity
/*
	./
	./drivers/
	./mount/
	./boot.wim
	./install.wim
*/
// 3. update boot.wim
dism /get-wiminfo /wimfile:boot.wim // see indexes

dism /mount-wim /wimfile:boot.wim /index:1 /mountdir:mount
dism /add-driver /image:mount /driver:drivers /recurse
dism /unmount-wim /mountdir:mount /commit

dism /mount-wim /wimfile:boot.wim /index:2 /mountdir:mount
dism /add-driver /image:mount /driver:drivers /recurse
dism /unmount-wim /mountdir:mount /commit

// 4. update install.wim
dism /get-wiminfo /wimfile:install.wim // choose index
dism /mount-wim /wimfile:install.wim /index:1 /mountdir:mount // by index, or by name: /name:"Windows 7 Ultimate"
dism /add-driver /image:mount /driver:drivers /recurse
dism /unmount-wim /mountdir:mount /commit
// 5. put new install.wim and boot.wim to new win7.iso
/*
	open win7.iso with PowerISO
	delete sources/install.esd
	delete sources/boot.wim
	add new install.wim and boot.wim
	save as
*/
// done
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// actual quick example:
dism /mount-wim /wimfile:D:\win7\boot.wim /index:1 /mountdir:D:\win7\mount
dism /add-driver /image:D:\win7\mount /driver:D:\win7\drivers /recurse
dism /unmount-wim /mountdir:D:\win7\mount /commit

dism /mount-wim /wimfile:D:\win7\boot.wim /index:2 /mountdir:D:\win7\mount
dism /add-driver /image:D:\win7\mount /driver:D:\win7\drivers /recurse
dism /unmount-wim /mountdir:D:\win7\mount /commit

dism /mount-wim /wimfile:install.wim /index:1 /mountdir:D:\win7\mount
dism /add-driver /image:D:\win7\mount /driver:D:\win7\drivers /recurse
dism /unmount-wim /mountdir:D:\win7\mount /commit
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// community.spiceworks.com
// update boot.wim
dism /mount-wim /wimfile:boot.wim /index:2 /mountdir:mount
dism /image:mount /add-driver:"USB" /recurse
dism /unmount-wim /mountdir:mount /commit

// choose which index to convert to install.wim
dism /Get-WimInfo /WimFile:install.wim 

// update install.wim
dism /mount-wim /wimfile:install.wim /index:1 /mountdir:mount
dism /image:mount /add-driver:"USB" /recurse
dism /unmount-wim /mountdir:mount /commit
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// docs.microsoft.com

// 1. Mount a Windows image
Dism /Mount-Image /ImageFile:C:\test\images\install.wim /MountDir:C:\test\offline

// 2 Add a driver to the image
Dism /Image:C:\test\offline /Add-Driver /Driver:C:\drivers\mydriver.inf

// 2 To install all of the drivers from a folder and all its subfolders, point to the folder and use the /Recurse option.
Dism /Image:C:\test\offline /Add-Driver /Driver:c:\drivers /Recurse

// 2 To install an unsigned driver, use /ForceUnsigned to override the requirement that drivers installed on X64-based computers must have a digital signature.
Dism /Image:C:\test\offline /Add-Driver /Driver:C:\drivers\mydriver.inf /ForceUnsigned

// 3. Check to see if the driver was added.
// Drivers added to the Windows image are named Oem*.inf. This guarantees unique naming for newly added drivers.
// For example, the files MyDriver1.inf and MyDriver2.inf are renamed Oem0.inf and Oem1.inf.
Dism /Image:C:\test\offline /Get-Drivers

// 4. Commit the changes and unmount the image
Dism /Unmount-Image /MountDir:C:\test\offline /Commit
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// social.technet.microsoft.com/Forums/
Dism /Mount-Image /ImageFile:"F:\sources\boot.wim" /index:1 /MountDir:"C:\Temp\Offline" // Mount the wim file
Dism /Add-Driver /Image:"C:\Temp\Offline" /Driver:"C:\SWSETUP\SP78930" /Recurse         // Add drivers
Dism /Unmount-Image /Mountdir:"C:\Temp\Offline" /commit                                 // Then unmount the image and that's it.
// The drivers can be added to the install.wim file in the same way.
// If you need drivers in the boot process add them to the boot wim file.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@