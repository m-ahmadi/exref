import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


const store = createStore(rootReducer);
import store from './store';

import App from './App';

const rootElement = document.getElementById('root')
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
  rootElement
);