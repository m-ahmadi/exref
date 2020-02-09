// a generic is a type that allows something to be of multiple types rather than a single type.
// in other words: you can make a variable that can be a string or a number but not a boolean.

// generic array type:
let list: Array<number> = [1, 2, 3];

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example:
function identity<T>(arg: T): T {
	return arg;
}
identity<string>('myString');  // 'string'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// better example:
// defining acceptable types when making an instance of Person class:

class Person<Type1, Type2> {
  member1: Type1;
  member2: Type2;
  constructor(mem1: Type1, mem2: Type2) {
    this.member1 = mem1;
    this.member2 = mem2;
  }
  greet() {
    return [ this.member1, this.member2 ];
  }
}

let me = new Person<string, number>('what up', 22);
me.greet() // ['what up', 22]
me.member1 = 'everybody';
me.greet() // ['everybody', 22]
me.member1 = 32; // Erro: Type '32' is not assignable to type 'string'.

let ali = new Person<boolean, string>(false, 'olaghak');
// so on so forth...