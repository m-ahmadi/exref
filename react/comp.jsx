// a prop can be passed a primitive, anotherComp, function

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// class
class Comp extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	render() {
		return(
			<div>
				<p>Hello { this.props.name }</p>
				<input type="text" onChange={this.handleChange} />
			</div>
		);
	}
	componentDidMount() {}
	componentDidUpdate(prevProps, prevState) {} // not on first render
	componentWillUnmount() {}
	componentDidCatch(error, info) {}
	shouldComponentUpdate(nextProps, nextState) {}
	
	handleChange(event) {}
}
<Comp name='olagh' />

// without props:
class Comp extends React.Component {
	render() {
		return(
			<p>Hello!</p>
		);
	}
}
<Comp />

// pure
class Comp extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	shoudlComponentUpdate(nextProps, nextState) {
		// shallow prop and state comparison
	}
	render() {
		return <div />;
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// function (can't have state or lifecycle, unless using hooks)

function Comp() {
  return (
		<h1>Hello</h1>
		<h2>world</h2>
	);
}

function Comp() { return <h1>Hello</h1> }
const Comp = function () { return <h1>Hello!</h1> };
const Comp = () => { return <h1>Hello!</h1> };
const Comp = () => <h1>Hello!</h1>;
const Comp = () => (
	<h1>Hello</h1>
	<h2>world</h2>
);

<Comp />

// with props:
function Comp(props) {
  return (
		<h1>Hello {props.name}</h1>
	);
}

const Comp = props => <h1>Hello my number {props.number} little {props.name}</h1>;
const Comp = ({name}) => <h1>hi {name}</h1>;

<Comp number={1} name='olagh' />

// invalid:
function Comp() {
	return <h1>hello</h1>;
};
Comp.prototype.componentDidMount = function () { console.log('hi') };
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// use defined component by rendering them or exporting them to be used in another file:

// exporting:
export default MyComponent
// another file:
import MyComponent from './MyComponent';


// rendering:
ReactDOM.render(
	<SayHello name='olagh' />
	document.getElementById('root')
);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@