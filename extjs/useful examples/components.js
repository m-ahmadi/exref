/*													Components
	An Ext JS application’s UI is made up of one or many widgets called Components.
	All Components are subclasses of the Ext.Component class
	which allows them to participate in
	automated lifecycle management including instantiation, rendering, sizing and positioning, and destruction.
	Ext JS provides a wide range of useful Components out of the box,
	and any Component can easily be extended to create a customized Component.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													The Component Hierarchy
	A Container is a special type of Component that can contain other Components.
	A typical application is made up of many nested Components in a
	tree-like structure that is referred to as the Component hierarchy.
	Containers are responsible for managing the Component lifecycle of their children,
	which includes creation, rendering, sizing and positioning, and destruction.
	A typical application’s Component hierarchy starts with a Viewport at the top,
	which has other Containers and/or Components nested within it:
	
`					Ext.container.Viewport
`										Ext.form.Panel
`		Ext.tab.Panel			Ext.form.field.Text		Ext.button.Button
`	Ext.panel.Panel

	Child Components are added to a Container using the Container’s items configuration property.
	This example uses Ext.create() to instantiate two Panels, then adds those Panels as child Components of a Viewport:
*/
var childPanel1 = Ext.create('Ext.panel.Panel', {
    title: 'Child Panel 1',
    html: 'A Panel'
});

var childPanel2 = Ext.create('Ext.panel.Panel', {
    title: 'Child Panel 2',
    html: 'Another Panel'
});

Ext.create('Ext.container.Viewport', {
    items: [ childPanel1, childPanel2 ]
});
/*
	Containers use Layout Managers to size and position their child Components.
	For more information on Layouts and Containers please refer to the Layouts and Containers Guide.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													XTypes and Lazy Instantiation
	Every Component has a symbolic name called an xtype.
	For example Ext.panel.Panel has an xtype of ‘panel’.
	The above example showed how to add already instantiated Components to a Container.
	In a large application, however, this is not ideal since not all of the Components need to be instantiated right away,
	and some Components might never be instantiated depending on how the application is used.
	For example an application that uses a Tab Panel will only need
	the contents of each tab to be rendered if and when each tab is clicked on by the user.
	This is where xtypes come in handy by allowing a Container’s children to be configured up front,
	but not instantiated until the Container determines it is necessary.
	The following example code demonstrates lazy instantiation and rendering of a Container’s Child components using a Tab Panel.
	Each tab has an event listener that displays an alert when the tab is rendered.
*/
Ext.create('Ext.tab.Panel', {
	renderTo: Ext.getBody(),
	height: 100,
	width: 200,
	items: [
		{
			// Explicitly define the xtype of this Component configuration.
			// This tells the Container (the tab panel in this case)
			// to instantiate a Ext.panel.Panel when it deems necessary
			xtype: 'panel',
			title: 'Tab One',
			html: 'The first tab',
			listeners: {
				render: function() {
					Ext.MessageBox.alert('Rendered One', 'Tab One was rendered.');
				}
			}
		},
		{
			// xtype for all Component configurations in a Container
			title: 'Tab Two',
			html: 'The second tab',
			listeners: {
				render: function() {
					Ext.MessageBox.alert('Rendered One', 'Tab Two was rendered.');
				}
			}
		}
	]
});
/*
	Running this code results in an immediate alert for the first tab.
	This happens because it is the default active tab, and so its Container Tab Panel instantiates and renders it immediately.
	The alert for the second tab does not get displayed until the tab is clicked on.
	This shows that the tab was not rendered until needed, since the render event did not fire until the tab was activated.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*														Showing and Hiding
	All Components have built in show and hide methods.
	The default CSS method used to hide the Component is “display: none”,
	but this can be changed using the hideMode configuration:
*/
var panel = Ext.create('Ext.panel.Panel', {
	renderTo: Ext.getBody(),
	title: 'Test',
	html: 'Test Panel',
	hideMode: 'visibility' // use the CSS visibility property to show and hide this component
});
panel.hide(); // hide the component
panel.show(); // show the component

/*														Floating Components
	Floating Component are positioned outside of the document flow using CSS absolute positioning,
	and do not participate in their Containers’ layout.
	Some Components such as Windows are floating by default,
	but any Component can be made floating using the floating configuration.
*/
var panel = Ext.create('Ext.panel.Panel', {
    width: 200,
    height: 100,
    floating: true, // make this panel an absolutely-positioned floating component
    title: 'Test',
    html: 'Test Panel'
});
/*
	The above code instantiates a Panel but does not render it.
	Normally a Component either has a renderTo configuration specified, or is added as a child Component of a Container,
	but in the case of floating Components neither of these is needed.
	Floating Components are automatically rendered to the document body the first time their show method is called:
*/
panel.show(); // render and show the floating panel
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@