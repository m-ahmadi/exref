/*
	If you want to do require() calls in the HTML page, then it is best to not use data-main.
	data-main is only intended for use when the page just has one main entry point, the data-main script.
	For pages that want to do inline require() calls,
	it is best to nest those inside a require() call for the configuration:
*/
// <script src="scripts/require.js"></script>
// <script>
	require(['scripts/config'], function() {
		// Configuration loaded now, safe to do other require calls
		// that depend on that config.
		require(['foo'], function(foo) {

		});
	});
// </script>