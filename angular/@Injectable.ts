import { Injectable } from '@angular/core';

@Injectable({
	providedIn:  // which injector (@NgModule/InjectorType) will provide it?
		'root'     // app-level injector
		'platform' // singleton injector shared by all applications on the page
		'any'      // provides a unique instance in every module (including lazy modules) that injects the token
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

/*
if component and service are in the same file, then order of definition matters.
define service first, then component, otherwise run-time null reference error.
it's possible to define component first with forwardRef()
*/