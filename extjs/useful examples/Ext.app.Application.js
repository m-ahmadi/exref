Ext.define('MyApp.Application', {
	
	extend: 'Ext.app.Application',
	
	name: 'Packt',
	
	views: [
		'posts.List', 'posts.Edit'
	],
	
	controllers: [
		'Root'
	],
	
	stores: [
	],
	
	requires: [
        'MyApp.view.main.Main'
    ],
	
	init: function () {
		//	fires first
	},
	
	launch: function () {	//	( Ext.onReady )
		// TODO - Launch the application
		
	},
	
	onAppUpdate: function () {
		
    }
	
});

/*
	Ext.application = function(config) {
	Ext.require('Ext.app.Application');
	Ext.onReady(function() {
		new Ext.app.Application(config);
		});
	};
*/

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

Ext.application({
    name: 'MyApp',
    
	extend: 'MyApp.Application',
    
	/*requires: [
        'MyApp.view.main.Main'
    ],	(extjs 6.0.1)*/
    
	// mainView: 'MyApp.view.main.Main',	(extjs 6.0.1)
	
	autoCreateViewport: false //'MyApp.view.main.Main'	(if false: app goes nowhere, blank screen)
});

Ext.application('MyApp.Application');

var app = MyApp.getApplication();
