/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MyApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    
	init: function () {
		/*var me = this; // #1
		me.splashscreen = Ext.getBody().mask( 'Loading application', 'splashscreen' ); // #2
		me.splashscreen.addCls('splashscreen');
		Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
			cls: 'x-splash-icon'
		});*/
	},
	
    launch: function () {
		/*var me = this;
		var task = new Ext.util.DelayedTask(function() {
			//Fade out the body mask
			me.splashscreen.fadeOut({
				duration: 1000,
				remove:true
			});
			//Fade out the icon and message
			me.splashscreen.next().fadeOut({
				duration: 1000,
				remove:true,
				listeners: {
					afteranimate: function(el, startTime, eOpts ){
						console.log('launch'); // for IE: window.console.log()
					}
				}
			});
		});
		task.delay(2000);*/
    }
});
