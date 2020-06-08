new vue({
	// side effects          (triggers effects outside the component)
	el
	
	// global awareness      (requires knowledge beyond the component)
	name
	parent
	
	// component type        (changes the type of the component)
	functional
	
	// template modifiers    (changes the way templates are compiled)
	delimiters
	comments
	
	// template dependencies (assets used in the template)
	components
	directives
	filters
	
	// composition           (merges properties into the options)
	extends
	mixins
	
	// interface             (the interface to the component)
	inheritattrs
	model
	props
	propsdata
	
	// local state           (local reactive properties)
	data
	computed
	
	// events                (callbacks triggered by reactive events)
	watch
	beforecreate // lifecycle events (in the order they're called)
	created
	...
	
	// non-reactive props    (instance props independent of the reactivity system)
	methods
	
	// rendering             (declarative description of component output)
	template
	render
	rendererror
});