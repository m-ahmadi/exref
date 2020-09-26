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




//sol?

const findWords = (board, words) => {
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let res = [];

  const buildTrie = () => {
    const root = {};
    for (const w of words) {
      let node = root;
      for (const c of w) {
        if (node[c] == null) node[c] = {};
        node = node[c];
      }
      node.word = w;
    }
    return root;
  };

  const search = (node, x, y) => {
    if (node.word != null) {
      res.push(node.word);
      node.word = null; // make sure only print one time for each word
    }

    if (x < 0 || x >= board.length || y < 0 || y >= board[0].length) return;
    if (node[board[x][y]] == null) return;

    const c = board[x][y];
    board[x][y] = '#'; // Mark visited
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy;
      search(node[c], i, j);
    }
    board[x][y] = c; // Reset
  };

  const root = buildTrie();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      search(root, i, j);
    }
  }
  return res;
};





