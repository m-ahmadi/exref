import { Input } from '@angular/core';

// marks class prop as output property (bound to a target dom prop)
// must be observable
@Output(
	bindingPropertyName?: string // specify name of the dom prop (otherwise same name as class prop)
)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// example
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Output, EventEmitter } from '@angular/core';


@Component({selector: 'foo', template: `
	<label>Add an item: <input #newItem></label>
	<button (click)="addNewItem(newItem.value)">Add to parent's list</button>
`})
class FooComponent {
	@Output() myEvent  = new EventEmitter();
	addNewItem(value) { this.myEvent.emit(value) }
}

@Component({selector: 'app-root', template: `
	<foo (myEvent)="addItem($event)"></foo>
	<ul>
		<li *ngFor="let item of items">{{item}}</li>
	</ul>
`})
class AppComponent {
  items = ['item1', 'item2', 'item3', 'item4'];
  addItem(newItem) { this.items.push(newItem) }
}

@NgModule({
  declarations: [AppComponent, FooComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@