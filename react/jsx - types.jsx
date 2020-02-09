class Comp extends React.Component {
	this // component instance
}

Comp          implements JSXComponent
() => <div /> implements JSXComponent
<div />       implements JSXElement

JSXComponent
	.props: {}
	.context
	.refs
	.state: null | {}

JSXElement // only a descriptor object
	.type
	.key
	.ref
	.props: {}