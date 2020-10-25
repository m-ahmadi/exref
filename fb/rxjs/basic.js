/* includes
rxjs.umd.js
rxjs.umd.min.js
rxjs.umd.min.js.map

cdn
https://unpkg.com/rxjs/bundles/rxjs.umd.min.js
old cdn?
https://unpkg.com/@reactivex/rxjs@latest/dist/global/rxjs.umd.js
https://unpkg.com/@reactivex/rxjs@latest/dist/global/rxjs.umd.min.js
https://unpkg.com/@reactivex/rxjs@latest/dist/global/rxjs.umd.min.js.map
*/
import { range } from 'rxjs';
import { map, filter } from 'rxjs/operators';
// or
const { range } = rxjs;
const { map, filter } = rxjs.operators;

range(1, 200)
	.pipe(
		filter(x => x % 2 === 1),
		map(x => x + x)
	)
	.subscribe(x => console.log(x));

rxjs.range(1, 10).pipe(filter(i=>i<4), map(i=>i*100)).subscribe(console.log) // 100 200 300

rxjs.from([1,2,3,4]).pipe(filter(i=>i<3), map(i=>i*20)).subscribe(console.log)
rxjs.of(1,2,3,4).pipe(filter(i=>i<3), map(i=>i*20)).subscribe(console.log)