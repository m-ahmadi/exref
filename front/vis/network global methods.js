// var network = new vis.Network(DOMEl, data, opt);


.destroy()
// Remove the network from the DOM and remove all Hammer bindings and references.

.setData( {nodes: visDataSet/Array, edges: vis DataSet/Array} )
/*	Override all the data in the network.
	If stabilization is enabled in the physics module, the network will stabilize again.
	This method is also performed when first initializing the network.
*/

.setOptions( {} )
/*	Set the options.
	All available options can be found in the modules above.
	Each module requires it's own container with the module name to contain its options.
*/

.on('event', fn)
.off('event', fn)
.once('event', fn)

.getConnectedNodes("nodeId")
/*
	Returns an array of nodeIds of the all the nodes that are directly connected to this node.
	If you supply an edgeId, vis will first match the id to nodes. If no match is found,
	it will search in the edgelist and return an array: [fromId, toId].
*/