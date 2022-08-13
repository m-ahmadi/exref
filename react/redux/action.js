/*
actions are:
	payloads of information that send data from your application to your store.
	just javascript objects.
	only source of information for the store.
	send to the store using store.dispatch().
*/
const addTodo = {
  type: 'ADD_TODO',
  text: 'Build my first Redux app'
};

const toggleTodo = {
  type: 'TOGGLE_TODO',
  index: 5
};

const setVisibilityFilter = {
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
};
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// action creators
// functions that create actions by returning an action object.
function addTodo(text) {
  return {
		type: 'ADD_TODO',
		text
  };
}
// in flux, action creators trigger a dispatch when invoked:
function addTodoWithDispatch(text) {
  const action = {
		type: 'ADD_TODO',
		text
  };
  dispatch(action);
}
// in Redux:
dispatch( addTodo(text) );
dispatch( completeTodo(index) );

// or:
const boundAddTodo = text => dispatch( addTodo(text) );
const boundCompleteTodo = index => dispatch( completeTodo(index) );
boundAddTodo(text);
boundCompleteTodo(index);

// 3 ways to dispatch:
store.dispatch()
connect()
bindActionCreators()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* actions in redux vs flux
in redux, the structure of action objects is up to you. (whatever you want)
in flux which is redux's father, structure of action objects is specified in a certain way.
*/

// flux spec of actions:
{
	// only 4 properties allowed:
	type: "",         // required. string constant. gives information about the nature of the action that has occurred
	payload: {},      // optional. any value. any information about the action that's not its type. if error: true, it should be an error object.
	error: undefined, // optional. true: action represents an error. undefined | null: not nterpreted as an error.
	meta: undefined,  // optional. any value. extra information that's not part of the payload.
}

// example:
{
  type: 'ADD_TODO',
  payload: {
		text: 'Do something.'  
  }
}
{
  type: 'ADD_TODO',
  payload: new Error(),
  error: true
}