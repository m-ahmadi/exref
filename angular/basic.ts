import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Input, Injectable } from '@angular/core';

// note: do not put semicolon after @Decorateros

@Component({
	selector: 'crap-article',
	template: `
	<article>
		<h2>{{ title }}</h2>
		<p>{{ body }}</p>
	</article>
	`,
	styles: ['h2 {color: red} p {color: blue;}']
})
class CrapArticleComponent {
	@Input() title;
	@Input('text') body;
}

@Component({
  selector: 'app-root',
  template: `
	<h1>{{ title }}</h1>
	<crap-article title="Breaking News" text="Billions of dollars was made today."></crap-article>
	<ul>
		<li *ngFor="let i of list">item number {{ i }}</li>
	</ul>`,
	styles: ['li { background: cyan; }']
})
class AppComponent {
  title = 'List of things';
  list = ['Foo', 'Bar', 'Baz'];
}

@Injectable()
class HeroService {}

@NgModule({
  declarations: [
    AppComponent,
		CrapArticleComponent
  ],
  imports: [
    BrowserModule
	],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }