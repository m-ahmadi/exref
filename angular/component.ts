import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	template: '<p>hello</p>',
	styleUrls: ['./app.component.css']
	style: [`p {font-weight: bold;}`]
})

export class AppComponent {
	title = 'app';
}

/*	a component:

	belongs to some module ( mentioned in declarations array of that module)
	has a template (html)
	has style (css/scss)
*/