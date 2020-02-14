//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	basic
	~/ : project_folder
	
	put require.js in scripts directory

	~/js/require.js
	~/js/main.js
	
	<script data-main="js/main" src="js/require.js"></script>
	data-main : entry point of app
*/


//	~/js/util.js
//	~/js/main.js
// 
requirejs(["util"], function (util) {
	
});
// or
require(["util"], function (util) {
	
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	data-main attr with/without file extention
	
	data-main="js/main"
	data-main="js/main.js"
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*	head or end-of-body
	
	<head>
		<script data-main="js/main" src="js/require.js"></script>
	</head>
	
	<body>
		
		<script data-main="js/main" src="js/require.js"></script>
	</body>
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@