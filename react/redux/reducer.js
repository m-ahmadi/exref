// actions only describe what happened, they don't describe how the application's state changes.
// reducers specify how the application's state changes in response to actions sent to the store.

// it's just a function
// it receives the state object and an action.
// it makes a copy of the state object and modifies some properties in the new copy and returns it.

function todoApp(state = initialState, action) {
	// don't mutate the state in a reducer. use Object.assign()
	let result = state;
	const type = action.type;
	
	if (type === 'SET_VISIBILITY_FILTER') {
		result = Object.assign({}, state, {
			visibilityFilter: action.filter
		});
	}
	
	return result;
}