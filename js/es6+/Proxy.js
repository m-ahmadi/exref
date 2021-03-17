const target = {
	message1: 'hello',
	message2: 'everyone'
};
const handler1 = {};
const proxy1 = new Proxy(target, handler1);
proxy1.message1 // hello
proxy1.message2 // everyone


const handler2 = {
	get: function (target, prop, receiver) {
		return 'world';
	}
};
const proxy2 = new Proxy(target, handler2);
proxy2.message1 // world
proxy2.message2 // world