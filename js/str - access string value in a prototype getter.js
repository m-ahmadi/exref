// the only way I know of:

String.prototype.__defineGetter__('test', function () {
	return `**${this}**`;
});

'abc'.test // '**abcd**'

// not possible with arrows (cuz of bounding)
String.prototype.__defineGetter__('bad', ()=>'hi '+this);

// node.js example
String.prototype.__defineGetter__('j', function(){return join(__dirname,this.toString())});