// context is a way to pass data through the component tree without having to pass props down manually at every level.
const { Provider, Consumer } = React.createContext('light');

const ThemedButton = props => (
	<Consumer>
		{value => <button style={{color: value}}>Click</button>}
	</Consumer>
);
const ThemedTitle = props => (
	<Consumer>
		{value => <h1 {...props} style={{color: value}}>Hello</h1>}
	</Consumer>
);

ReactDOM.render(
	<>
		<Provider value="blue">
			<ThemedButton />
			<ThemedTitle />
		</Provider>
		
		<Provider value="red">
			<ThemedButton />
			<ThemedTitle />
		</Provider>
	</>,
	document.getElementById('root')
);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// ref
const MyContext = React.createContext(defaultValue);
MyContext.Provider /*
	accepts a value prop to be passed to descendants consumers
	can be connected to many consumers
	can be nested to override values deeper within the tree */
MyContext.Consumer /*
	requires a function as a child
	function receives current context `value` prop and returns an element.
	value arg is equal to value prop of closest ancestor provider
	if there is no ancestor provider, value arg is defaultValue
	all consumers re-render when `value` prop of their ancestor provider is changed */
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@