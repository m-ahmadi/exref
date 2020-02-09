/*
	trick is to use "init" and "lunch" methods in:
	~/app/Application.js
	
	we also meed a "all.scss" file in:
	~/sass/etc/all.scss
	
	@@@@@@@@@@@@@@@@@@@@@@@	 all.scss	@@@@@@@@@@@@@@@@@@@@@@@@@@@@
	.x-mask.splashscreen {
		background-color: white;
		opacity: 1;
	}
	.x-mask-msg.splashscreen,
	.x-mask-msg.splashscreen div {
		font-size: 16px;
		font-weight: bold;
		padding: 30px 5px 5px 5px;
		border: none;
		background: {
			color: transparent;
			position: top center;
		};
	}
	.x-message-box .x-window-body .x-box-inner {
		min-height: 110px !important;
	}
	.x-splash-icon {
		background-image: url('images/app/logo.png') !important;
		margin-top: -30px;
		height: 200px;
	}
	@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

Ext.define('MyApp.Application', {
    extend: 'Ext.app.Application',
    
    name: 'MyApp',

    stores: [
        // TODO: add global / shared stores here
    ],
    
	init: function () {
		var me = this;
		me.splashscreen = Ext.getBody().mask( 'Loading application', 'splashscreen' ); // #2
		me.splashscreen.addCls('splashscreen');
		Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
			cls: 'x-splash-icon'
		});
	},
	
    launch: function () {
		var me = this;
		var task = new Ext.util.DelayedTask(function() {
			me.splashscreen.fadeOut({
				duration: 1000,
				remove:true
			});
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
		task.delay(2000);
    }
});
