var options = {
	autoResize: true,
	height: '100%',
	width: '100%'
	locale: 'en',
	locales: locales,
	clickToUse: false,
	configure: {...},    // defined in the configure module.
	edges: {...},        // defined in the edges module.
	nodes: {...},        // defined in the nodes module.
	groups: {...},       // defined in the groups module.
	layout: {...},       // defined in the layout module.
	interaction: {...},  // defined in the interaction module.
	manipulation: {...}, // defined in the manipulation module.
	physics: {...},      // defined in the physics module.
};

var network = new vis.Network(container, data, options);
// or
network.setOptions(options);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@