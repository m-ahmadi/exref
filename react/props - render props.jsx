// a pattern to share code between components using a prop whose value is a function.
// prop name can be anything and doesn't have to be `render`

const Comp1 = props => (
	<strong style={{color: 'red'}}>
		{ props.render() }
	</strong>
);

const Comp2 = () => (
	<Comp1 render={() => <span>hi</span>} />
);

ReactDOM.render(
	<Comp2 />,
	document.getElementById('root')
);

/* as if you wrote:
	<strong style={{color: 'red'}}>
		<span>hi</span>
	</strong>
*/