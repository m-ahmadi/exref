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