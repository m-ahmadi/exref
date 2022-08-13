/* steps
1. import AppRoutingModule into AppModule
2. import RouterModule and Routes into AppRoutingModule
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *-routing.module.ts
import { RouterModule, Routes } from '@angular/router';

import { FooComponent } from './foo.component';


const appRoutes: Routes = [
	/* order does matter. more specific routes should be placed above less specific ones
	1. static routes
	2. empty route (default)
	3. wildcard route
	*/
	{ path: '',                 component: HomeComponent },
	{ path: 'users',            component: UsersComponent },
	{ path: 'users/:id/:name',  component: UsersComponent },
	{ path: '**',               component: NotFoundComponent },
	{
		path: '',
		loadChildren: () => import('./path/to/some.module').then(m => m.SomeModule),
	},
	{
		canLoad: [AuthGuard]
	}
	
	{
		path?:                  '/ | ** | ...'         // path to match against
		pathMatch?:             'prefix'|'full',       // path-matching strategy. prefix: from left. full: entire path.
		matcher?:               () =>,                 // custom url-matching function (can't be used together with this.path)
		component?:             undefined,             // component to instantiate. can be undefined if child routes specify components.
		redirectTo?:            '',                    // url to redirect to. absolute if begins with / otherwise relative to this.path. if undefined, router won't redirect
		outlet?:                '',                    // RouterOutlet where component is placed
		canActivate?:           [],                    // dependency-injection tokens to determine if current user is allowed to activate the component
		canActivateChild?:      [],                    // ... can current user activate child of the component
		canDeactivate?:         [],                    // ... can current user deactivate        the component
		canLoad?:               [],                    // ... can current user Load              the component
		data?:                  {},                    // extra developer-defined data provided to component via ActivatedRoute
		resolve?:               ResolveData,           // map of di tokens used to look up data resolvers
		children?:              Routes,                // child Route objects for nested route config
		loadChildren?:          () => NgModuleFactory, // LoadChildren object specifying lazy-loaded child routes
		runGuardsAndResolvers?: 'always '|'paramsOrQueryParamsChange ' // policy for when to run guards and resolvers on a route
	}
];

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component()
class FooComponent implements OnInit {
	constructor(
		private router: Router,
		private route: ActivatedRoute) {}

	ngOnInit() {}

	onSomething() {
		this.router.navigate(['/servers']);
		this.router.navigate(['/servers'], {relativeTo: this.route});

		this.route.snapshot.params['id'];			// static (won't work from inside the component)
		this.route.snapshot.params['name'];

		this.route.params.subscribe(					// dynamic
			(params: Params) => { params['id'] },
		);
	}

}