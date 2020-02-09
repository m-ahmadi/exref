// root HTMLElement is assigned to `ref` prop on first render (via obj or fn)
<Comp|el ref={ {current: null} | domEl => } />

const log = console.log;

let ref1;
const ref2 = React.createRef();
const ref3 = {};
const ref4 = {current: null};

log(ref2) // {current: null}

ReactDOM.render(
	<>
		<input ref={el => ref1 = el} /> correct
		<input ref={ref2} />            correct
		<input ref={ref3} />            Warning: Unexpected ref object provided for input.
		<input ref={ref4} />            no problem
	</>,
	document.getElementById('root')
);

log(ref1) // <input>
log(ref2) // {current: <input>}
log(ref3) // {current: <input>}
log(ref4) // {current: <input>}