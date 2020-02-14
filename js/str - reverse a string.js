function reverseStr(str) {
	const len = str.length - 1;
	let reversed = "";
	for (let i=len; i>=0; i-=1) reversed += str[i];
	return reversed;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var r = (function () {
	var res = '',
		c = 1,
	
	f = function (str) {
		alert(str);
		var len = str.length;
		res += str[len + c];
		c += 1;
		if (len - c === 0) {
			c = 1;
			res = '';
			return res;
		} else {
			f(str);
		}
	};
	
	return f;
}());

var r = (function () {
	var t = '',
		out = '',
	
	f = function (str) {
		if (str.length === 0) {
			out = t;
			t = '';
			console.log(out);
			return out;
		} else {
			newStr = str.slice(0, -1);
			t += str.slice(-1);
			f(newStr);
		}
	};
	return f;
}());
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// a good string to test string reverse implementations: 'foo 𝌆 bar mañana mañana'
function badReverse(s){
    return s.split("").reverse().join("");
}
naiveReverse('foo 𝌆 bar');
// → 'rab �� oof'
// reason: JavaScript’s internal character encoding
// 𝌆 is an astral symbol, and JavaScript exposes it as two separate code units

function badReverse() {
    var s = "";
    var i = this.length;
    while (i>0) {
        s += this.substring(i-1,i);
        i--;
    }
    return s;
}
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// Implementation 1:

function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}
// Implementation 2:

function reverse(s) {
  var o = [];
  for (var i = s.length - 1, j = 0; i >= 0; i--, j++)
    o[j] = s[i];
  return o.join('');
}
// Implementation 3:

function reverse(s) {
  var o = [];
  for (var i = 0, len = s.length; i <= len; i++)
    o.push(s.charAt(len - i));
  return o.join('');
}
// Implementation 4:

function reverse(s) {
  return s.split('').reverse().join('');
}
// Implementation 5:

function reverse(s) {
  var i = s.length,
      o = '';
  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  return o;
}
// Implementation 6:

function reverse(s) {
  for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
  return o;
}
// Implementation 7:

function reverse(s) {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}
// Implementation 8:

function reverse(s) {
  function rev(s, len, o) {
    return (len === 0) ? o : rev(s, --len, (o += s[len]));
  };
  return rev(s, s.length, '');
}
// Implementation 9:

function reverse(s) {
  s = s.split('');
  var len = s.length,
		halfIndex = Math.floor(len / 2) - 1,
		tmp;
	
 for (var i = 0; i <= halfIndex; i++) {
		tmp = s[len - i - 1];
		s[len - i - 1] = s[i];
		s[i] = tmp;
	}
	return s.join('');
}
// Implementation 10

function reverse(s) {
  if (s.length < 2)
    return s;
  var halfIndex = Math.ceil(s.length / 2);
  return reverse(s.substr(halfIndex)) +
         reverse(s.substr(0, halfIndex));
}