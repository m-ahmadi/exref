import { createStore } from 'redux';
const store = createStore(reducer, [preloadedState], [enhancer]);

// don't create more than one store in an application.
// a store only has one reducer function.
// use combineReducers() to create a single root reducer out of many.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basic example:
const store = createStore(myReducer);
const unsubscribe = store.subscribe(myListener); // in case you want to unsubscribe

const incAction = { type: 'INCREMENT'};
const decAction = { type: 'DECREMENT'};

store.dispatch(incAction);
store.dispatch(incAction);
store.dispatch(decAction);

function myReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
function myListener() {
	console.log( store.getState() );
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example:
const initialState = {
	name: "mohammad",
	age: 30,
	job: "programmer"
};

const store = createStore(myReducer, initialState);
store.subscribe(myListener);

const actionChangeName = { type: 'CHANGE_NAME', newName: 'Mamad' };
const actionChangeAge = { type: 'CHANGE_AGE', newAge: 32 };
const actionChangeJob = { type: 'CHANGE_JOB', newJob: 'king' };

store.dispatch(actionChangeName);
store.dispatch(actionChangeAge);
store.dispatch(actionChangeJob);

function myReducer(state, action) {
	switch (action.type) {
    case 'CHANGE_NAME':
			return Object.assign( {}, state, {name: action.newName} );
    case 'CHANGE_AGE':
			return Object.assign( {}, state, {age: action.newAge} );
		case 'CHANGE_JOB':
			return Object.assign( {}, state, {job: action.newJob} );
    default:
      return state
  }
}
function myListener() {
	console.log( store.getState() );
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// subscribe
const unsubscribe = store.subscribe(myListener);

function myListener() {
	
}
// adds a change listener that's called any time an action is dispatched.
// to unsubscribe the change listener, invoke the function returned by subscribe.
// it's a low-level api. most likely, instead of using it directly, you'll use React (or other) bindings.
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// dispatch
store.dispatch(action);

// this is the only way to trigger a state change.
// the store's reducing function is called next with the current getState() result and the given action synchronously.