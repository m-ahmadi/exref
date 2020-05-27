import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root' | 'platform' | 'any'
})
class MyService {}

// in another service
@Injectable() class MyOtherService {
	constructor(public myService: MyService) {}
}

// in component
@Component() class MyComponent {
	constructor(public myService: MyService) {}
}