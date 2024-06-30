// equal share coef = how much of a food category relative to its equal share

totalContainers = 133;

equalShareCoefsAndFoods = [
	[1.8, 'قورمه سبزی'],
	[1.6, 'قیمه'],
	[1.4, 'استامبولی'],
	[0.9, 'فسنجان'],
	[0.5, 'حلیم بادمجان'],
	[0.45, 'سوپ'],
	[0.35, 'عدسی'],
	[0.35, 'حلیم گندم'],
];

equalShare = totalContainers / equalShareCoefsAndFoods.length;

sharesAndFoods = equalShareCoefsAndFoods.map(([coef, food]) => ({
	share: Math.round(coef * equalShare),
	food,
}));

console.table(sharesAndFoods);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// freezer capacity in containers
/*
_________________________
│          18           │
│-----------------------│
│          18           │
│-----------------------│
│          18           │
│———————————————————————│
│          18           │
│                       │
│———————————————————————│
│          18           │
│                       │
│———————————————————————│
│          18           │
│                       │
│———————————————————————│
│          25           │
│                       │
│                       │
│                       │
‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
*/
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@