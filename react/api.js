React.Component
React.Fragment
React.PureComponent
React.Suspense

React.createElement(type, props?, ...children?)
const Hello = React.createElement('div', null, `Hello ${this.props.toWhat}`)
ReactDOM.render(
	React.createElement(Hello, {toWhat: 'World'}, null),
	document.getElementById('root')
)

React.cloneElement()
React.createFactory(type)
React.isValidElement(object)
React.createRef()
React.forwardRef()
React.lazy()

React.Children.map(children, function[(thisArg)])
React.Children.forEach(children, function[(thisArg)])
React.Children.count(children)
React.Children.only(children)
React.Children.toArray(children)

React.createReactClass(descriptor) // for using react without es6