import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'yellow';
	}
}

/*
	<p appHighlight>Highlight me!</p>
	
	the paragraph background will be red
*/