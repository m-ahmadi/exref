Ext.define('My.own.Window', {
   extend: 'Ext.Component',
   /** @readonly */
   isWindow: true,
   config: {
	   title: 'Title Here',
	   bottomBar: {
		   height: 100,
		   resizable: false
	   }
   },
   applyTitle: function(title) {
	   if (!Ext.isString(title) || title.length === 0) {
		   alert('Error: Title must be a valid non-empty string');
	   }
	   else {
		   return title;
	   }
   },
   applyBottomBar: function(bottomBar) {
	   if (bottomBar) {
		   if (!this.bottomBar) {
			   return Ext.create('My.own.WindowBottomBar', bottomBar);
		   }
		   else {
			   this.bottomBar.setConfig(bottomBar);
		   }
	   }
   }
});
Ext.define('My.own.WindowBottomBar', {
   config: {
	   height: undefined,
	   resizable: true
   }
});





var myWindow = Ext.create('My.own.Window', {
    title: 'Hello World',
    bottomBar: {
        height: 60
    }
});
alert(myWindow.getTitle()); // alerts "Hello World"
myWindow.setTitle('Something New');
alert(myWindow.getTitle()); // alerts "Something New"
myWindow.setTitle(null); // alerts "Error: Title must be a valid non-empty string"
myWindow.setBottomBar({ height: 100 });
alert(myWindow.getBottomBar().getHeight()); // alerts 100