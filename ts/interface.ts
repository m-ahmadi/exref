interface LabelledValue {
	label: string;
	color?: string;
	width?: number;
	[key: string]: Node;
	[propName: string]: any;
	[index: number]: string;
	[index: string]: number | string;
	readonly x: number;
	readonly y: number;
	readonly [index: number]: string;
	(source: string, subString: string): boolean;
	(start: number): string;
	setTime(d: Date): void;
  validation?(flag: any) : boolean;
	tick(): void;
	new (hour: number, minute: number);
	new (hour: number, minute: number): ClockInterface;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
function printLabel(labelledObj: { label: string }) {
	console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

interface LabelledValue {
	label: string;
}

function printLabel(labelledObj: LabelledValue) {
	console.log(labelledObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);


//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
interface SquareConfig {
	color?: string;
	width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
	let newSquare = { color: 'white', area: 100 };
	if (config.color) {
		newSquare.color = config.color;
	}
	if (config.width) {
		newSquare.area = config.width * config.width;
	}
	return newSquare;
}

let mySquare = createSquare({ color: 'black' });
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// index signatures
interface Nodes {
	[key: string]: Node;
}

interface SquareConfig {
	color?: string;
	width?: number;
	[propName: string]: any;
}
// SquareConfig can have any number of properties,
// and as long as they aren’t color or width, their types don’t matter
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@