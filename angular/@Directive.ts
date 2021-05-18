@Directive({
	// identifier css selector of this directive in template
	selector: 'element-name'|'.class'|'[attribute]'|'[attribute=value]'|':not(sub_selector)'|'selector1, selector2',
	
	// directiveProperty to bindingProperty configs (same as @Input)
	inputs:    ['dirvProp' | 'dirvProp: bindProp', ...],
	
	// directiveProperty to bindingProperty configs (same as @Output)
	outputs:   ['dirvProp' | 'dirvProp: bindProp', ...],
		// dirvProp: component prop where value is written
		// bindProp: dom       prop where value is read from
		
	providers: Provider[], // injector of this directive or component with a token that maps to a provider of a dependency
	exportAs:  '',         // name to use in template to assign this directive to a variable
	queries:   {},         // queries to inject into the directive.
	host:      {},         // maps class properties to host element bindings for properties, attributes, and events, using a set of key-value pairs
	jit:       false       // true: skip aot
})

@Component extends @Directive
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// outputs example
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, EventEmitter, Output } from '@angular/core';


@Component({selector: 'foo', template: '<input (input)="myEvent.emit($event.target.value)" />',
	outputs: ['myEvent']       // <foo (myEvent)="method($event)"></foo>
	// or
	outputs: ['myEvent: crap'] // <foo (crap)="method($event)"></foo>
})
class FooComponent {
	myEvent = new EventEmitter();
	// note:
	@Output() myEvent = new EventEmitter();       // same as outputs: ['myEvent']
	@Output('crap') myEvent = new EventEmitter(); // same as outputs: ['myEvent: crap']
}

@Component({selector: 'app-root', template: '<foo (crap)="someMethod($event)"></foo> <h1>{{bankName}}</h1>'})
class AppComponent {
	bankName;
	someMethod(bankName) {
		this.bankName = bankName;
	}
}

@NgModule({
	declarations: [AppComponent, FooComponent],
	imports: [BrowserModule],
	bootstrap: [AppComponent]
})
export class AppModule { }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@