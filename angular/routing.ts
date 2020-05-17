// *-routing.module.ts

import { RouterModule, Routes } from '@angular/router';

import { FooComponent } from './foo.component';
import { BarComponent } from './bar.component';

const appRoutes: Routes = [
	{ path: '',                 component: HomeComponent },
	{ path: 'users',            component: UsersComponent },
	{ path: 'users/:id/:name',  component: UsersComponent },
	{ path: '**',               component: NotFoundComponent },
	{
		path: '',
		loadChildren: 'app/components/gallery/gallery.module#Home'
	},
	
	{
		path?:                  ''
		pathMatch?:             ''
		matcher?:               UrlMatcher
		component?:             undefined,
		redirectTo?:            '',
		outlet?:                '',
		canActivate?:           [],
		canActivateChild?:      [],
		canDeactivate?:         [],
		canLoad?:               [],
		data?:                  Data
		resolve?:               ResolveData
		children?:              Routes
		loadChildren?:          LoadChildren
		runGuardsAndResolvers?: RunGuardsAndResolvers
	}
];

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// *.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({})

export class FooComponent implements OnInit {
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