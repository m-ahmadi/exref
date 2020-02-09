//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// in module

const appRoutes: Routes = [
	{ path: '',                 component: HomeComponent },
	{ path: 'users',            component: UsersComponent },
	{ path: 'users/:id/:name',  component: UsersComponent },
	{ path: '**',               component: NotFoundComponent },
	{
		path: '',
		loadChildren: 'app/components/gallery/gallery.module#Home'
	}
];

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// in component
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({})

export class UsersComponent implements OnInit {
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