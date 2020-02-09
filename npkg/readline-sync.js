var readlineSync = require('readline-sync');
 
// Wait for user's response. 
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
 
// Handle the secret text (e.g. password). 
var favFood = readlineSync.question('What is your favorite food? ', {
  hideEchoBack: true // The typed text on screen is hidden by `*` (default). 
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');


var readlineSync = require('readline-sync');
if (readlineSync.keyInYN('Do you want this module?')) {
  // 'Y' key was pressed. 
  console.log('Installing now...');
  // Do something... 
} else {
  // Another key was pressed. 
  console.log('Searching another...');
  // Do something... 
}


var readlineSync = require('readline-sync'),
  animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
  index = readlineSync.keyInSelect(animals, 'Which animal?');
console.log('Ok, ' + animals[index] + ' goes to your room.');
/*
[1] Lion
[2] Elephant
[3] Crocodile
[4] Giraffe
[5] Hippo
[0] CANCEL
 
Which animal? [1...5 / 0]: 2
Ok, Elephant goes to your room.
*/