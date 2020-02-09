let inst;
const state = {value: ''};

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = state;
		this.componentDidMount = mount;
		this.componentDidUpdate = update;
		inst = this;
  }
  render() {
    return (
      <form onSubmit={submit}>
        <label>
          Name:
          <input type="text" value={inst.state.value} onChange={change} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function change(event) {
	inst.setState({value: event.target.value});
}
function submit(event) {
	alert('A name was submitted: ' + inst.state.value);
	event.preventDefault();
}
function mount() {
	console.log(inst.state);
}
function update() {
	console.log(inst.state);
}

ReactDOM.render(
	<NameForm />,
	document.getElementById('root')
);