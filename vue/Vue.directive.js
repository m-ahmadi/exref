Vue.directive(id='', ?definition={} | fn) // register global directive
Vue.directive(id='', ()=>)                // function definition is shorthand for `bind` and `update`
var dirv = Vue.directive(id='')           // retrieve

const definition = {
	bind:             (el, binding, vnode, oldVnode)=>
  inserted:         (...)=>
  update:           (...)=>
  componentUpdated: (...)=>
  unbind:           (...)=>
};

const binding = {
	name:       '',
	value        undefined,
	oldValue     undefined,
	expression: '',
	arg:         undefined,
	modifiers:   {}
};