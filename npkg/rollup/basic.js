// src/main.js
import foo from './foo.js';
export default function () {
  console.log(foo);
}

// src/foo.js
export default 'hello world!';


// rollup js/main.js -o js/bundle.js -f amd