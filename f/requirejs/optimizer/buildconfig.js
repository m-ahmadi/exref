// official
{
    baseUrl: ".",
    paths: {
        jquery: "some/other/jquery"
    },
    name: "main",
    out: "main-built.js"
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
{
	"baseUrl": "../lib",
	"paths": {
		"mylib": "../main"
	},
	"include": ["../tools/almond", "main"],
	"exclude": ["jquery"],
	"out": "../dist/mylib.js"
	"wrap": {
		"startFile": "wrap.start",
		"endFile": "wrap.end"
	}
}

