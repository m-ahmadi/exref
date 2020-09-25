/*
Given a 2D board and a list of words from the dictionary, find all words in the board.

Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.
The same letter cell may not be used more than once in a word.
*/

// Example:
// Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]


// started 11:20

for (word of words) {
	
	
	let result = [];
	let found = walk(word,0,0);
	if (found) result.push(found);
	
	/* for (let i=0, n<letters.length; i<n; i++) {
		let letter = letters[i];
		let nextLetter = letters[i+1];
		if le
	} */
}

function walk(word='', letterIdx=0, row=0, col=0) {
	let letter = word[letterIdx];
	
	let cell  = board[row][col];
	
	if (cell === letter) {
		letterIdx++;
		walk(word, letterIdx, 0, 0);
	} else {
		let up    = board[row-1][col];
		let down  = board[row+1][col];
		let right = board[row]  [col+1];
		let left  = board[row]  [col-1];
		
		if (up === letter) { 
			word
			walk(word, letterIdx, row-=1, col);
		} else if (down === letter) {
			walk(word, letterIdx, row+=1, col);
		} else if (right === letter) {
			 walk(word, letterIdx, row, col+=1);
		} else if (left === letter) {
			walk(word, letterIdx, row, col-=1);
		} else {
			
		}
		
	}
	
}










