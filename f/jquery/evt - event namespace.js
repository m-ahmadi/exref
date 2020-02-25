/*	
	useful when you have multiple handlers for an event
	an event handler attached via namespaces could be removed, without disturbing other handlers attached to that event.
	'click.myPlugin.simple' defines both the myPlugin and simple namespaces.
	event names should only contain alphanumerics, underscore, and colon characters.
	namespaces are similar to css classes in that they are not hierarchical; only one name needs to match.
	namespaces beginning with an underscore are reserved for jquery's use.
*/

.on('click.myPlugin')
.on('click.myPlugin.simple')
.off('click.simple')
.off('.myNamespace') // another way
//--------------------------------------------------------------------------------------------------------
// example: (removing anonymous handlers)

// removing named handlers:
$('body')
	.on('click', doSomething)
	.on('click', doSomethingElse)
$('body').off('click')              // all click handlers are removed
$('body').off('click', doSomething) // only first handler is removed

// removing anonymous handlers:
$('body').on('click.one',     function () { alert('doSomething') })
$('body').on('click.one.two', function () { alert('doSomethingElse') })
$('body').off('click.one.two') // doSomething still exist