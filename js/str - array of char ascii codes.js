// array of character ascii codes
[...'abcd'].map(c => c.charCodeAt(0))       // second byte included. [97, 98, 99, 100]
[...'abcd'].map(c => c.charCodeAt(0) & 255) // second byte ignored. (always use this)

// sum of all character ascii codes
[...'Foobar']
  .map(char => char.charCodeAt(0))
  .reduce((current, prev) => prev + current) // 601