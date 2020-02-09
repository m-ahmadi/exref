/*
an update can be caused by changes to props or state. (state change causes a render().)
state can be changed only with a setState() call.
only the component owning the state can change it's state.

in react, mutable state is typically kept in the state property of components, and only updated with setState().
*/

class MouseTracker extends Component {
	constructor(props) {
		super(props);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.state = { x: 0, y: 0 };
	}

	handleMouseMove(event) {
		this.setState({
			x: event.clientX,
			y: event.clientY
		});
	}

	render() {
		return (
			<div style={{height: '100%'}} onMouseMove={this.handleMouseMove}>
				<h1>Move the mouse around!</h1>
				<p>The current mouse position is ({this.state.x}, {this.state.y})</p>
			</div>
		);
	}
}