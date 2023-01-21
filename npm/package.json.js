// essential
{
	"name": "test",
	"version": "0.0.1"
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* version range descriptors
	
version                must match version exactly
>version               must be greater than version
>=version              greater than or equal to version
<version               less than version
<=version              less than or equal to version
~version               approximately equivalent to version
^version               compatible with version
1.2.x                  1.2.0, 1.2.1, etc., but not 1.3.0
*                      matches any version
""                     same as *
version1 - version2    same as >=version1 <=version2.
range1 || range2       passes if either range1 or range2 are satisfied
http://...             url dependency
git...                 git url
user/repo              github url
tag                    a specific version tagged and published as tag See npm-dist-tag
path/path/path         local path
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// use specific branch of a github repository
"repository": {
	"type": "git",
	"url": "git+https://github.com/username/repo.git#branch-name"
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// engines
{
	"engines": {
		"node": ">=0.10.3 <0.12",
		"npm": "~1.0.20"
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// files to include upon install
{
	"files": ["dist", "index.js", "*"]
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// npm init -f
{
  "name": "",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/m-ahmadi/pubsub.git#npm-module"
  },
  "keywords": [],
  "author": "Mohammad Ahmadi",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/m-ahmadi/pubsub/issues"
  },
  "homepage": "https://github.com/m-ahmadi/pubsub#readme"
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// first try
{
  "name": "app",
  "version": "version of application (eg: 1.0.0)",
  "description": "a short description of the website or app",
  "main": "primary entry point to your program (eg: app.js)",
  "author": "name of the author",
  "license": "licensing information of the app (eg: ISC MIT)",
  "dependencies": {
    "cookie-parser": "^1.4.1",
    "express": "^4.13.4",
    "googleapis": "^5.0.0",
    "handlebars": "^4.0.5",
    "mysql": "^2.10.2",
    "sha1": "^1.1.1"
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// env indicators
{
	"main": "",
	"browser": "",
	"module": "",
	"exports": "", // node v12.8+
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@