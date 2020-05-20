// routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MainPage from './components/MainPage';
import SomePage from './components/SomePage';
import SomeOtherPage from './components/SomeOtherPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="/some/where" component={SomePage} />
    <Route path="/some/otherpage" component={SomeOtherPage} />
  </Route>
);
//--------------------------------------------------------------------------------
// index.js
import { Router, hashHistory as history } from 'react-router';
import routes from './routes';

ReactDOM.render(
  <Router routes={routes} history={history} />,
  document.getElementById('your-app')
);
//--------------------------------------------------------------------------------
// App.js
const App = () => (
	<div>
		<header>
			This is my website!
		</header>

		<main>
			{this.props.children}
		</main>

		<footer>
			Your copyright message
		</footer>
	</div>
);
//--------------------------------------------------------------------------------
// Component.js
import { Link } from 'react-router';
<Link to="/some/where">Click me</Link>