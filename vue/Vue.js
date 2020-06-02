const options = {
	// data
	data:      {} | ()=>,     // fn: only in component
	props:     ['',] | {},
	propsData: { k: v, ...},  // only when new Vue()
	computed:  { k: ()=> | get k | set k, ... },
	methods:   { k: ()=>, ... },
	watch:     { k: '' | ()=> | {} | [] },
	
	// dom
	el:          '' | Element, // only when new Vue()
	template:    '',
	render:      (createElement) => VNode,
	renderError: (createElement, error) => VNode, // only in dev. 2.2+
	
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
	directives: ,
	filters:    ,
	components: ,
	
	// composition
	parent:  ,
	mixins:  ,
	extends: ,
	provide: ,
	inject:  ,
	
	
	: ,
	: ,
};
var vm = new Vue()