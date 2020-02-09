import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
	ref1: Subscription;
	ref2: Subscription;

	constructor() { }
	
	ngOnInit() {
		/* const myNumbers = Observable.interval(1000);
		this.ref1 = myNumbers.subscribe(
			(number: number) => {
			  console.log(number);
			}
		); */

		const myObservable = Observable.create((observer: Observer<string>) => {
			observer.next('first package');
			observer.next('second package');
			observer.error('this does not work');
			observer.complete();
    });
    
    this.ref2 = myObservable.subscribe(
      (data: string) => { console.log(data) },
      (error: string) => { console.log(error) },
      () => { console.log('completed'); }
    );
	}

	ngOnDestroy() {
		this.ref1.unsubscribe();
		this.ref2.unsubscribe();
	}
}