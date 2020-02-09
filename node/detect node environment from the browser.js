// worst
// this detects CommonJS support, which browsers may support (ie: requirejs):
typeof module !== "undefined" && module.exports

// better
typeof window === "undefined"

// a bit better
typeof process === "object" &&
process.toString() === "[object process]"

// lil bit better
// detects node versions >= 3.0.0
typeof process !== "undefined" &&
(process.release.name.search(/node|io.js/) !== -1)

// best
// detects node versions >= 0.10.0
typeof process !== "undefined" &&
typeof process.versions.node !== "undefined"