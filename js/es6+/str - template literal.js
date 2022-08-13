var name = 'Your name is ' + first + ' ' + last + '.'
var url = 'http://localhost:3000/api/messages/' + id

var name = `Your name is ${first} ${last}.`
var url = `http://localhost:3000/api/messages/${id}`

`foo ${`bar`}` // 'foo bar'

// invalid statements inside ${}
var x;
`the lord of the ${ if (x) bing}`; // SyntaxError
`the lord of the ${x ? 'bing' : 'ring'}`;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// tagged template
var person = 'Mike';
var age = 28;

function myTag(strings, personExp, ageExp) {
  var str0 = strings[0]; // 'That '
  var str1 = strings[1]; // ' is a '

  // there is technically a string after the final expression (in our example),
  // but it is empty (''), so disregard:
  // var str2 = strings[2];

  var ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }
  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}`;
}
myTag`That ${ person } is a ${ age }`; // That Mike is a youngster

// another example:
let person = {name: 'John Smith'}; 
let tag = (strArr, name) => strArr[0] + name.toUpperCase();  
tag `My name is ${person.name}.` // 'My name is JOHN SMITH'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@