import { Component } from '@angular/core';

@Component({
	selector: 'hello-world',
	template: '<p>{{message}}</p>',
	styleUrls: ['./hello-world.component.css']
});

export class HelloWorldComponent {
	message = 'Hello world';
	constructor() { };
}