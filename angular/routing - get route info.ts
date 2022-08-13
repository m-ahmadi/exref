import { NgModule, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({selector: 'foo', template: '<router-outlet><h3>I\'m foo</h3></router-outlet>'}) class FooComponent {}
@Component({selector: 'bar', template: `
	<router-outlet>
		<h3>Hi, I\'m bar.</h3>
		route params: <strong>{{routeParams}}</strong> <br>
		query params: <strong>{{queryParams}}</strong>
	</router-outlet>
`})
class BarComponent implements OnInit {
	routeParams;
	queryParams;
	constructor(private route: ActivatedRoute) {}
	ngOnInit() {
		this.route.params.subscribe(params => this.routeParams = JSON.stringify(params));
		this.route.queryParams.subscribe(queryParams => this.queryParams = JSON.stringify(queryParams));
	}
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// routing module
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'foo', component: FooComponent },
	{ path: 'bar', redirectTo: 'bar/', pathMatch: 'full' },
	{ path: 'bar/:name', component: BarComponent },
	{ path: '**', redirectTo: '/' },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] }) class AppRoutingModule { }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import { BrowserModule } from '@angular/platform-browser';

@Component({selector:'app-root', template: `
	<a routerLink="/foo">Go to foo</a> <br>
	<a routerLink="/bar">Go to bar</a> <br>
	<a routerLink="/bar/HELLO">Go to bar with HELLO</a> <br>
	<a [routerLink]="['bar', param]">Go to bar with</a>&nbsp;<input (input)="update($event.target.value)" /> <br><br>
	
	<div style="border: 1px dashed grey; width:400px; height:200px;">
		<router-outlet></router-outlet>
	</div>
`})
class AppComponent {
	param;
	update(param) { this.param = param }
}

@NgModule({
	imports: [BrowserModule, AppRoutingModule],
	declarations: [AppComponent, FooComponent, BarComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }