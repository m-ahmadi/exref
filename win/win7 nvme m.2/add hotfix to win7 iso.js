// useful
dism /get-packages /image:mount
dism /unmount-wim /mountdir:mount /discard
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// support.microsoft.com
/*
	./src                 copy all from DVD/mounted ISO
	./mount
	./winremount
	./hotfix              hotfix (.msu or .cab files)
	./drivers             driver files
*/
dism /mount-image /imagefile:src\sources\boot.wim /index:1 /mountdir:mount
dism /add-package /image:mount /packagepath:hotfix
dism /add-driver /image:mount /driver:drivers /recurse
dism /unmount-image /mountdir:mount /commit

dism /mount-image /imagefile:src\sources\boot.wim /index:2 /mountdir:mount
dism /add-package /image:mount /packagepath:hotfix
dism /add-driver /image:mount /driver:drivers /recurse
// manually sort mount\sources by date, and copy updated files to src\sources
dism /unmount-image /mountdir:mount /commit

// check indexes from install.wim to see how many indexes have to be updated.
// if there are multiple indexes, update them one by one.
dism /get-wiminfo /wimfile:src\sources\install.wim

dism /mount-image /imagefile:src\sources\install.wim /index:1 /mountdir:mount
dism /add-package /image:mount /packagepath:hotfix
dism /add-driver /image:mount /driver:drivers /recurse

dism /mount-image /imagefile:mount\windows\system32\recovery\winre.wim /index:1 /mountdir:winremount
dism /add-package /image:mount /packagepath:hotfix
dism /add-driver /image:mount /driver:drivers /recurse

dism /unmount-wim /mountdir:winremount /commit
dism /unmount-wim /mountdir:mount /commit

// creating .iso with osdimg (extra)
// legacy BIOS boot mode:
oscdimg -LTEST -m -u2 -bC:\src\boot\etfsboot.com C:\src C:\Win7.NVME.ISO
// legacy and UEFI BIOS multiple boot mode:
oscdimg -LTEST -m -u2 -bootdata:2#p0,e,bC:\src\boot\etfsboot.com#pEF,e,bC:\src\efi\microsoft\boot\efisys.bin C:\src C:\Win7.NVME.ISO

// compress the image (optional)
dism /image:mount /cleanup-image /startcomponentcleanup /resetbase // didn't work (error 87)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// working example:
dism /mount-image /imagefile:d:\win7\src\sources\boot.wim /index:1 /mountdir:d:\win7\mount
dism /add-package /image:d:\win7\mount /packagepath:d:\win7\hotfix
dism /add-driver /image:d:\win7\mount /driver:d:\win7\drivers /recurse
dism /unmount-image /mountdir:d:\win7\mount /commit

dism /mount-image /imagefile:d:\win7\src\sources\boot.wim /index:2 /mountdir:d:\win7\mount
dism /add-package /image:d:\win7\mount /packagepath:d:\win7\hotfix
dism /add-driver /image:d:\win7\mount /driver:d:\win7\drivers /recurse

// sort mount\sources by date, and copy mount\sources to src\sources
dism /unmount-image /mountdir:d:\win7\mount /commit

dism /get-wiminfo /wimfile:d:\win7\src\sources\install.wim // check index

dism /mount-image /imagefile:d:\win7\src\sources\install.wim /index:1 /mountdir:d:\win7\mount
dism /add-package /image:d:\win7\mount /packagepath:d:\win7\hotfix
dism /add-driver /image:d:\win7\mount /driver:d:\win7\drivers /recurse

dism /mount-image /imagefile:d:\win7\mount\windows\system32\recovery\winre.wim /index:1 /mountdir:d:\win7\winremount
dism /add-package /image:d:\win7\mount /packagepath:d:\win7\hotfix
dism /add-driver /image:d:\win7\mount /driver:d:\win7\drivers /recurse

dism /unmount-wim /mountdir:d:\win7\winremount /commit
dism /unmount-wim /mountdir:d:\win7\mount /commit

oscdimg -LTEST -m -u2 -bootdata:2#p0,e,bd:\win7\src\boot\etfsboot.com#pEF,e,bd:\win7\src\efi\microsoft\boot\efisys.bin d:\win7\src d:\Win7.NVME.ISO
oscdimg -LTEST -m -u2 -bd:\win7\src\boot\etfsboot.com d:\win7\src D:\Win7.NVME.LEGACY-BIOS.ISO
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// winaero.com
dism /get-wiminfo /wimfile:install.wim
dism /mount-wim /wimfile:install.wim /index:1 /mountdir:mount
dism /add-package /image:mount /packagepath:KB2990941.msu
dism /add-package /image:mount /packagepath:KB3087873.msu
dism /unmount-wim /mountdir:mount /commit
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// as an alternative you can use NTLite to "slipstream" drivers/hotfixes into an win7.iso