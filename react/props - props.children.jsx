// `props.children` contains the content between opening and closing tags of a component

var Comp = props => (
	<p>I am a parent and this is {props.children}</p>
);

ReactDOM.render(
	<Comp>
		<strong>my children</strong>
	</Comp>,
	document.getElementById('root')
);

// renders:
<p>I am a parent and this is <strong>my children</strong></p>