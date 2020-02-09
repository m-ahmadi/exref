class App extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);
    this.$el.somePlugin();
  }
	
  componentWillUnmount() {
    this.$el.somePlugin('destroy');
  }

  render() {
    return <div ref={el => this.el = el} />;
  }
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
class Chosen extends React.Component {
	componentDidMount() {
		this.$el = $(this.el);
		this.$el.chosen();

		this.handleChange = this.handleChange.bind(this);
		this.$el.on('change', this.handleChange);
	}

	componentDidUpdate(prevProps) {
		if (prevProps.children !== this.props.children) {
			this.$el.trigger("chosen:updated");
		}
	}

	componentWillUnmount() {
		this.$el.off('change', this.handleChange);
		this.$el.chosen('destroy');
	}

	handleChange(e) {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<div>
				<select className="Chosen-select" ref={el => this.el = el}>
					{this.props.children}
				</select>
			</div>
		);
	}
}

ReactDOM.render(
	<>
		<Chosen onChange={value => console.log(value)}>
      <option>vanilla</option>
      <option>chocolate</option>
      <option>strawberry</option>
    </Chosen>
	</>,
	document.getElementById('root')
);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// depricated
class GoogleMap extends React.Component {
	render() {
		return(
			<div ref={ domEl => this.map = domEl }></div>
		);
	}

	componentDidMount() {
		new google.maps.Map(this.map, {
			center: { lat: this.props.lat, lng: this.props.lng },
			zoom: 8
		});
	}

	shouldComponentUpdate() {
		return false;
	}

	componentWillReceiveProps(nextProps) {
		this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {lat: -34.394, lng: 150.644};
	}

	render() {
		return (
			<div style={{height: '100%'}}>
				<button onClick={() => this.setState({lat: 40.7128, lng: -74.0059})}>Go to New York</button>
				{/* <GoogleMap lat={34.397} lng={150.644} /> */}
				<GoogleMap lat={this.state.lat} lng={this.state.lng} />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('root'));
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@