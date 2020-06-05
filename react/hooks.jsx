import React, { useState } from 'react';

// hooks don't work inside classes
useState(initValue, valueSetter)
useEffect
useContext
useReducer
useCallback
useMemo
useRef
useImperativeHandle
useLayoutEffect
useDebugValue

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] =  useState(0);
	const [age, setAge] =  useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

// same with class
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={ () => this.setState({ count: this.state.count + 1 }) }>
          Click me
        </button>
      </div>
    );
  }
}