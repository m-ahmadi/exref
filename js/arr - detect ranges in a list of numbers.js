const log = console.log;
// rand = () => Math.floor( Math.random() * (99-10)+10 )
// list = [...Array(40)].map(i=>rand()).sort((a,b)=>a-b).filter((v,i,a)=>a.indexOf(v)===i)
const list = [12, 14, 15, 17, 18, 19, 19, 21, 28, 29, 30, 30, 31, 32, 34, 34, 36, 39, 43, 44, 48, 48, 48, 51, 52, 58, 60, 61, 67, 68, 69, 73, 73, 75, 87, 89, 94, 95, 96, 98];
/* desired output: (ranges of -5 to +5)
[12, 14, 15, 17]
[18, 19, 19, 21]
[28, 29, 30, 30, 31, 32]
[34, 34, 36, 39]
[43, 44, 48, 48, 48]
[51, 52, 58]
[60, 61]
[67, 68, 69]
[73, 73, 75]
[87, 89]
[94, 95, 96, 98]
*/

log(list)
const ranges = [];
for (let i=0; i<list.length; i+=1) {
	const v = list[i];
	const range = list.slice(i).filter( j => isInRange(j, v-5, v+5) );
	if (range.length) {
		ranges.push(range);
		i = list.findIndex(j => j === range[range.length-1]);
		i = list.indexOf(range[range.length-1]);
	}
}

log(ranges)

function isInRange(n, min, max) {
	return n >= min && n <= max;
}
//--------------------------------------------------------------------------------------------------------
/* using splice (broken)

const ranges = []
list.sort((a,b)=>a-b).forEach((v,i,a) => {
	const range = a.filter( j => isInRange(j, v-5, v+5) );
	if (range.length) {
		ranges.push(range);
		a.splice(a.findIndex(j=>j===range[0]), range.length);
		log(range);
		log(a);
	}
})
*/