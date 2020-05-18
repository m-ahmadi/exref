import { Component } from '@angular/core';

// a component belongs to some module (mentioned in declarations array of that module)
@Component extends @Directive
@Component({
	changeDetection:     enum ChangeDetectionStrategy,
	viewProviders:       Provider[],
	moduleId:            '',
	templateUrl:         '',
	template:            '',
	styleUrls:           [''],
	styles:              [''],
	animations:          [],
	encapsulation:       enum ViewEncapsulation,
	interpolation:       ['{{', '}}'],
	entryComponents:     ,
	preserveWhitespaces: false,
	
	// inherited from @Directive
	selector:  '',
	inputs:    [''],
	outputs:   [''],
	providers: Provider[],
	exportAs:  '',
	queries:   {},
	host:      {},
	jit:       false
})

// example:
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	template: '<p>hello</p>',
	styleUrls: ['./app.component.css']
	styles: [`p {font-weight: bold;}`]
})