// index.js
process.cwd(); // "E:\xampp\htdocs\foo"
require("./another")();
process.cwd(); // "E:\xampp\htdocs"

// another.js
module.exports = () => {
	process.chdir("../");
	
};