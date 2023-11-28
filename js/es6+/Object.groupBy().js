Object.groupBy(items=iterable, callbackFn=(element, index)=>)

const inventory = [
	{ name: 'asparagus', type: 'vegetables', quantity: 5 },
	{ name: 'bananas',   type: 'fruit',      quantity: 0 },
	{ name: 'goat',      type: 'meat',       quantity: 23 },
	{ name: 'cherries',  type: 'fruit',      quantity: 5 },
	{ name: 'fish',      type: 'meat',       quantity: 22 },
];

const result = Object.groupBy(inventory, ({ type }) => type);

// result is:
{
	vegetables: [
		{ name: 'asparagus', type: 'vegetables', quantity: 5 },
	],
	
	fruit: [
		{ name: 'bananas', type: 'fruit', quantity: 0 },
		{ name: 'cherries', type: 'fruit', quantity: 5 }
	],
	
	meat: [
		{ name: 'goat', type: 'meat', quantity: 23 },
		{ name: 'fish', type: 'meat', quantity: 22 }
	]
}
