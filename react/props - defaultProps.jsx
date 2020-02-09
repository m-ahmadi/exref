// define default values for props

class Comp extends React.Component {}
Comp.defaultProps = {color: 'blue'};

// babel transform-class-properties:
class Comp extends React.Component {
  static defaultProps = {
		color: 'blue'
	};
	componentDidMount() {
		console.log(this.props.color);
	}
  render() {
    return (
      <div>Hello, {this.props.color}</div>
    )
  }
}

ReactDOM.render(
	<>
		<Comp />              // props.color will be set to blue
		<Comp color={null} /> // props.color will remain null
	</>,
	document.getElementById("root")
);