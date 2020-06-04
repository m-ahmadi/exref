// global config
Vue.silent                = false;
Vue.optionMergeStrategies = {} | {k: ()=>, ...}
Vue.devtools              = true;
Vue.errorHandler          = undefined | ()=> ;
Vue.warnHandler           = undefined | ()=> ;
Vue.ignoredElements       = [] | ['',] | /^/;
Vue.keyCodes              = {} | {k: 0|[0,], ...}
Vue.performance           = false;
Vue.productionTip         = true;

// global api
Vue.version
Vue.extend(options)
Vue.nextTick(?callback, ?context)
Vue.set(target, propName/index, value)
Vue.delete(target, propName/index)
Vue.directive(id, ?definition)
Vue.filter(id, ?definition)
Vue.component(id, ?definition)
Vue.use(plugin)
Vue.mixin(mixin)
Vue.compile(template)
Vue.observable(object)

const options = {
	// data
	data:          {} | ()=>,     // fn only in component
	props:         ['',] | {},
	propsData:     { k: v, ...},  // only when new Vue()
	computed:      { k: ()=> | get k | set k, ... },
	methods:       { k: ()=>, ... },
	watch:         { k: '' | ()=> | {} | [] },
	
	// dom
	el:            '' | Element, // only when new Vue()
	template:      '',
	render:        (createElement) => VNode,
	renderError:   (createElement, error) => VNode, // only in dev & 2.2+
	
	// lifecyle
	beforeCreate:  ()=>,
	created:       ()=>,
	beforeMount:   ()=>,
	mounted:       ()=>,
	beforeUpdate:  ()=>,
	updated:       ()=>,
	activated:     ()=>,
	deactivated:   ()=>,
	beforeDestroy: ()=>,
	destroyed:     ()=>,
	errorCaptured: (err, vm, info='')=>,
	
	// assets
	directives:    {},
	filters:       {},
	components:    {},
	
	// composition
	parent:        vm,
	mixins:        [{}, ...],
	extends:       {} | ()=>,
	provide:       {} | ()=> {},
	inject:        ...,
	
	// misc
	name:          '', // only in component
	delimiters:    ['{{', '}}'],
	functional:    false,
	model:         {prop: '', event: ''},
	inheritAttrs:  true,
	comments:      false,
};
var vm = new Vue();

// instance props
vm.$data        {}
vm.$props       {}
vm.$el          Element
vm.$options     {},
vm.$parent      vmPar,
vm.$root        vmRoot,
vm.$children    vm[],
vm.$slots       { k: VNode[], ... },
vm.$scopedSlots { k: props => VNode[] | undefined, ... },
vm.$refs        {},
vm.$isServer    false,
vm.$attrs       {k: '', ...},
vm.$listeners   { k: fn | fn[] },

// instance methods
vm.$watch(expOrFn, callback, ?options)
vm.$set(target, propName/index, value)
vm.$delete(target, propName/index)

vm.$on(evt, cb)
vm.$once(evt, cb)
vm.$off(?evt, ?cb)
vm.$emit(evt, ...?args)

vm.$mount(elemOrSelector)
vm.$forceUpdate()
vm.$nextTick(cb)
vm.$destroy()