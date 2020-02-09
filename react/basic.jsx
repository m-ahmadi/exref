class App extends React.Component {
  render() {
    return(
      <div className="App">
				<h1> Hello, Worldd! </h1>
			</div>
    );
  }
}

// hook react into the dom
ReactDOM.render(
	<App />,
	document.getElementById("root")
);

// no jsx:
ReactDOM.render(
	React.createElement('div', undefined, React.createElement('p', undefined, 'salam')),
	document.getElementById('root')
);
