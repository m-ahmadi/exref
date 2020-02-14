// the only way I know of:

String.prototype.__defineGetter__('test', function () {
	return `**${this}**`;
});

'abc'.test // '**abcd**'