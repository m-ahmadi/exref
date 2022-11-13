$proj = $args[0]
if ($proj -eq '') {
	throw 'Project dir was not provided.';
}

if ( !(Test-Path $proj) ) {
	ni -Path $proj -ItemType Directory
}

cd $proj
ni app,lib -ItemType Directory
cd app
ni style.css,main.js -ItemType File
cd ../

iwr 'https://raw.githubusercontent.com/m-ahmadi/exref/master/html/base.htm' -OutFile index.html
(gc index.html) `
	-replace '(<link rel="stylesheet".*href=")', '$1css/style.css' `
	-replace '(<script.*src=")', '$1js/main.js' |
		Out-File index.html

iwr 'https://github.com/uikit/uikit/releases/download/v3.2.7/uikit-3.2.7.zip' -OutFile file.zip
Expand-Archive -Path file.zip -DestinationPath lib/uikit
ri file.zip
cd lib/uikit
mi -Path css/* -Destination ./
mi -Path js/* -Destination ./
ri css
ri js

# TODO: adding lib refs to index.html
(gc index.html) `
	-replace '(<link rel="stylesheet".*href=")', '$1css/style.css' `
	-replace '(</scrpt>.*<script src="main.js">)', '$1js/main.js' |
		Out-File index.html