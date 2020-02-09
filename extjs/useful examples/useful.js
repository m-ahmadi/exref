Ext.getBody().mask( 'Loading application', 'splashscreen' )

Ext.getBody().addCls('splashscreen')

Ext.DomHelper.insertFirst()
Ext.DomHelper.insertFirst(---, {
	cls: 'class'
})
Ext.DomHelper.insertFirst(Ext.query('.class')[0], {
	cls: 'class'
})

Ext.query('.class')

Ext.util.DelayedTask(function () {
	
}).delay(2000);

Ext.query('.class').next().fadeOut({
	duration: 1000,
	remove:true,
	listeners: {
		afteranimate: function(el, startTime, eOpts ){
			//
		}
	}
});

Ext.defer( fn, millis, [scope], [args], [appendArgs] )
Ext.defer(fn);
Ext.Function.defer(fn, 2000, this, ['Fred']);
