//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*															Containers
	An Ext JS application UI is made up of Components.
	A Container is a special type of Component that can contain other Components.
	A typical Ext JS application is made up of several layers of nested Components.
	The most commonly used Container is Panel.
	Let’s take a look at how being a Container allows a Panel to contain other Components:
*/
Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 300,
    title: 'Container Panel',
    items: [
        {
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            width: '75%'
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            width: '75%'
        }
    ]
});
/*
	We just created a Panel that renders itself to the document body,
	and we used the items config to add two child Panels to our Container Panel.
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*															Layouts
	Every container has a layout that manages the sizing and positioning of its child Components.
	In this section we’re going to discuss how to configure a Container to use a specific type of Layout,
	and how the layout system keeps everything in sync.
	In the above example we did not specify a layout for the Container Panel.
	Notice how the child Panels are laid out one after the other, just as normal block elements would be in the DOM.
	This happens because the default layout for all Containers is Auto Layout.
	Auto Layout does not specify any special positioning or sizing rules for child elements.
	Let’s assume, for example, we want our two child Panels to be positioned side by side,
	and to each take up exactly 50% of the width of the Container.
	We can use a Column Layout simply by providing a layout config on the Container:
*/
Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 200,
    title: 'Container Panel',
    layout: 'column', /*HERE*/
    items: [
        {
            xtype: 'panel',
            title: 'Child Panel 1',
            height: 100,
            columnWidth: 0.5
        },
        {
            xtype: 'panel',
            title: 'Child Panel 2',
            height: 100,
            columnWidth: 0.5
        }
    ]
});

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*													How the layout system works

	A Container’s Layout is responsible for the initial positioning and sizing of all of the Container’s children.
	Internally the framework calls the Container’s updateLayout method which triggers the Layout to
	calculate the correct sizes and positions for all of the Container’s children and update the DOM.
	The updateLayout method is fully recursive, so any of the Container’s children will have their updateLayout method called as well.
	This continues until the bottom of the Component hierarchy is reached.
	You typically will not have to ever call updateLayout() in your application code,
	since the framework should handle it for you.
	A re-layout is triggered when the Container is resized,
	or when child Component items are added or removed.
	Normally we can just rely on the framework to handle updating the layout for us,
	but sometimes we want to prevent the framework from automatically laying out,
	so we can batch multiple operations together and then manually trigger a layout when we’re done.
	To do this we use the suspendLayout flag on the Container to prevent it from laying out
	while we perform our operations that would normally trigger a layout (adding or removing items for example).
	When we’re done all we have to do is turn the suspendLayout flag off and
	manually trigger a layout by calling the Container’s updateLayout method:
*/
var containerPanel = Ext.create('Ext.panel.Panel', {
    renderTo: Ext.getBody(),
    width: 400,
    height: 200,
    title: 'Container Panel',
    layout: 'column',
    suspendLayout: true // Suspend automatic layouts while we do several different things that could trigger a layout on their own
});

// Add a couple of child items.  We could add these both at the same time by passing an array to add(),
// but lets pretend we needed to add them separately for some reason.

containerPanel.add({
    xtype: 'panel',
    title: 'Child Panel 1',
    height: 100,
    columnWidth: 0.5
});

containerPanel.add({
    xtype: 'panel',
    title: 'Child Panel 2',
    height: 100,
    columnWidth: 0.5
});

// Turn the suspendLayout flag off.
containerPanel.suspendLayout = false;
// Trigger a layout.
containerPanel.updateLayout();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@