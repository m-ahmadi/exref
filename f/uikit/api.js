UIkit.componentName(element='selector'|HTMLElement|$el, ?options=string|{} ) => initedComponent // camelCased options
UIkit.componentName(element='selector'|HTMLElement|$el) => alreadyInitiedComponent
UIkit.notification('MyMessage', 'danger') // functional components (no element arg)

// init component
var sticky = UIkit.sticky('.sticky', {offset: 50, top: 100})
var drop = UIkit.drop('#drop', 'top-left')

// get already inited component
var sticky = UIkit.sticky('.sticky');

// update component
UIkit.update(element=document.body, type='update') // call update hook of components registered on element, its parents and children.
component.$emit(type='update')                     // update the component itself

// destroy component
component.$destroy()     // destroy and unbind event listeners
component.$destroy(true) // ... and removes from dom

// add event listener
UIkit.util.on('selector'|HTMLElement|$el, 'event event ...', function (customEvent, event, element) {})

// extend component (change its options globally)
UIkit.mixin({
	data: {
		offset: 50,
		top: 100
	}
}, 'sticky');

UIkit.getComponents(element) // get all the components on the element
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// components

// offcanvas
UIkit.offcanvas('#offcanvas').toggle()

// sortable
UIkit.sortable(element, options)
UIkit.util.on(element, 'start'|'stop'|'moved'|'added'|'removed', function (customEvent, event, element) {})

// modal
var modal = UIkit.modal('#modal' | $('#modal'))
modal.show()
modal.hide()
modal.toggle()
modal.isToggled()

// notification
var notifications = UIkit.notification('MyMessage', 'danger')
UIkit.notification({
	message: 'message or <i class="fa fa-refresh"></i>',
	status:  'info'|'primary'|'success'|'warning'|'danger',
	timeout: 1000,
	pos:     'top-right'|...
})

// nav
UIkit.nav(element).toggle(index=0|string|int|HTMLElement, animate=true)