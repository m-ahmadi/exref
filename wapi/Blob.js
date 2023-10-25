// https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob

var blob = new Blob(array=iterable, ?options={
	type:    '',    // https://developer.mozilla.org/en-US/docs/Glossary/MIME_type
	endings: 'transparent|native',
})

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

var array = ['<q id="a"><span id="b">hey!</span></q>']; // an array consisting of a single string
var blob = new Blob(array, { type: "text/html" });      // the blob
