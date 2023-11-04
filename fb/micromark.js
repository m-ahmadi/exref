// install
import { micromark } from 'https://esm.sh/micromark@3?bundle'; // browser (esm only)
const micromark = require('micromark');                        // node

// api
// https://github.com/micromark/micromark/blob/main/packages/micromark/readme.md#api

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// examples

micromark('## Hello, *world*!') // <h2>Hello, <em>world</em>!</h2>
