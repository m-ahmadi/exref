import { NgModule, Component } from '@angular/core';

@Component({selector: 'notfound', template: '<h2>Page not found</h2>'}) class PageNotFoundComponent {}
@Component({selector: 'foo', template: '<router-outlet>I\'m foo</router-outlet>'}) class FooComponent {}
@Component({selector: 'bar', template: '<router-outlet>Hello bar</router-outlet>'}) class BarComponent {}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// routing module
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
	{ path: 'foo', component: FooComponent },
	{ path: 'bar', component: BarComponent },
	{ path: '', redirectTo: '/foo', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent },
];
@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] }) class AppRoutingModule { }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
import { BrowserModule } from '@angular/platform-browser';

@Component({selector:'app-root', styles: ['.active{background:orange;} .b{background:red;}'], template: `
	<a routerLink="/foo">Go to foo</a>                            <br>
	<a routerLink="/bar"  routerLinkActive="active">Go to bar</a> <br>
	<a routerLink="/what" routerLinkActive="b">Go to undef</a>    <br> <br>
	
	<div style="border: 1px dashed grey; width:200px; height:200px;">
		<router-outlet></router-outlet>
	</div>
`})
class AppComponent {}

@NgModule({
	imports: [BrowserModule, AppRoutingModule],
	declarations: [AppComponent, FooComponent, BarComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }