const x = () => (

<BrowserRouter
  basename={?str}
  forceRefresh={false}
  getUserConfirmation={?fn}
  keyLength={?num}
></BrowserRouter>

<HashRouter
  basename={optionalString}
  getUserConfirmation={optionalFunc}
  hashType={optionalString}
>
  <App />
</HashRouter>

<Link
	to={'' | {pathname, search, hash, state} | location => }
	replace={false}
	innerRef={node => }
	component={React.Component}
></Link>

<NavLink ...Link.props
	activeClassName={''}
	activeStyle={{}}
	exact={false}
	strict={false}
	isActive={(match, location) => }
	location={{}}
	aria-current={'page'|'step'|'location'|'date'|'time'|'true'}
></NavLink>

<Prompt />

<MemoryRouter
  initialEntries={?arr}
  initialIndex={?num}
  getUserConfirmation={?fn}
  keyLength={?num}
></MemoryRouter>

<Redirect
	to={'' | {}}
	push={false}
	from={''}
	exact={false}
	strict={false}
	sensitive={false}
/>

<Route
	render={fn}
	children={fn}
	path={'' | ['',]}
	exact={false}
	location={{}}
	sensitive={false}
></Route>

<Router
	history={{}}
	children={node}
></Router>

<StaticRouter
	basename={''}
	location={'' | {}}
	context={{}}
	children={node}
></StaticRouter>


<Switch location={{}} children={node}>
	<Route />
	...
</Switch>

);