var colors = require('colors');
 
console.log('hello'.green); // outputs green text 
console.log('i like cake and pies'.underline.red) // outputs red underlined text 
console.log('inverse the color'.inverse); // inverses the color 
console.log('OMG Rainbows!'.rainbow); // rainbow 
console.log('Run the trap'.trap); // Drops the bass


// in a way which doesn't extend String.prototype:
var colors = require('colors/safe');
 
console.log(colors.green('hello')); // outputs green text 
console.log(colors.red.underline('i like cake and pies')) // outputs red underlined text 
console.log(colors.inverse('inverse the color')); // inverses the color 
console.log(colors.rainbow('OMG Rainbows!')); // rainbow 
console.log(colors.trap('Run the trap')); // Drops the bass

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
	text colors
		black
		red
		green
		yellow
		blue
		magenta
		cyan
		white
		gray
		grey
	background colors
	
		bgBlack
		bgRed
		bgGreen
		bgYellow
		bgBlue
		bgMagenta
		bgCyan
		bgWhite
		
	styles
		reset
		bold
		dim
		italic
		underline
		inverse
		hidden
		strikethrough
	
	extras
		rainbow
		zebra
		america
		trap
		random

*/