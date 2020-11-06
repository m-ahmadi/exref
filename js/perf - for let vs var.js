console.time('var')
for (var i=0; i<5e9; i++) {}
console.timeEnd('var') // 47 seconds


console.time('let')
for (let i=0; i<5e9; i++) {}
console.timeEnd('let') // 5 seconds