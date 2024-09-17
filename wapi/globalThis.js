// https://developer.mozilla.org/en-US/docs/Glossary/Global_object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis

globalThis === global // true in node
globalThis === window // true in browser
globalThis === self   // true in web-worker
globalThis === frames // true in browser
