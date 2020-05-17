import { Input } from '@angular/core';

// marks class field as an input property (bound to a target dom prop)
@Input(
	bindingPropertyName?: string // specify name of the dom prop (otherwise same name as class prop)
)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Input } from '@angular/core';

@Component({selector: 'foo', template: '<article><h2>{{title}}</h2><p>{{body}}</p></article>'})
class FooComponent {
	@Input() title;
	@Input('text') body;
}

@Component({selector: 'app-root', template: 'here is <foo title="Meow" text="blah blah..."></foo>'})
class AppComponent {}

@NgModule({
  declarations: [AppComponent, FooComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@