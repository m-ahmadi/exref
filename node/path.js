const path = require('path');

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// directory separator
path.sep
//	\ on Windows
//	/ on POSIX
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// path of current running module (script)
__filename // file name of current module. for a main program this isn't necessarily same as file name used in command line.
__dirname  // dir  name of current module. same as: path.dirname(__filename)

// /Users/mjr/example.js
console.log(__filename); // /Users/mjr/example.js
console.log(__dirname);  // /Users/mjr

path.join(__dirname, 'your/path')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// join
// calls path.normalize to normalize a string path (takes care of .. and . paths)
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..') //  '/foo/bar/baz/asdf'
path.join('foo', {}, 'bar')                        //  TypeError: Path must be a string. Received {}

// instead of:
'path' + '/' + 'to' // or
'path' + path.sep + 'to'
// use:
path.join('path', 'to')
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// resolve
path.resolve([...paths]) /*
resolves a sequence of paths/path-segments into an absolute path.
another way to think is a sequence of cd commands in shell.

returned path is normalized and trailing slashes are removed. (unless it's a root dir)
returns the cwd when:
	no arguments are passed.
	an absolute path could not be generated from arguments.
zero-length arguments are ignored.
*/
process.cwd()       // 'd:\xampp\htdocs\test'
path.resolve()      // 'd:\xampp\htdocs\test'
path.resolve('')    // same...
path.resolve(2)     // TypeError
path.resolve('../') // 'd:/xampp'
path.resolve('/')   // 'd:'

file = dir + '/' + file; // not recommended
file = path.resolve(dir, file)
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// relative
path.relative(from, to)
path.relative('a/b/c', 'a/g/d') // '../../g/d'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// basename
path.basename('/path/to/hello.html')   // 'hello.html' (might yield different results on posix & windows)
path.basename('C:\\temp\\myfile.html') // on posix:   'C:\\temp\\myfile.html'
path.basename('C:\\temp\\myfile.html') // on windows: 'myfile.html'

// for consistent results with windows or posix file paths on any operating system, use `path.win32` or `path.posix`:
path.win32.basename('C:\\temp\\myfile.html') // on posix & windows: 'myfile.html'
path.posix.basename('/tmp/myfile.html')      // on posix & windows: 'myfile.html'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// extname
path.extname('/path/to/hello.html') // '.html'
path.extname('index.html')          // '.html'
path.extname('index.coffee.md')     // '.md'
path.extname('index.')              // '.'
path.extname('index')               // ''
path.extname('.index')              // ''
path.extname('.index.md')           // '.md'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// dirname
path.dirname('/foo/bar/baz') // '/foo/bar
path.dirname()               // TypeError
path.dirname(2)              // TypeError
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// parse
path.parse('C:\\path\\dir\\file.txt')
{
	root: 'C:\\',
  dir: 'C:\\path\\dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file' 
}

// get file name:
path.parse('hello.html').name // 'hello'

// get file extension:
path.parse('hello.html').ext  // '.html'

path.parse()  // TypeError
path.parse(2) // TypeError
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// normalize
path.normalize(path) /*
returns '.' if path is an empty string.
path separators are replaced by the platform-specific separator. (win:\ posix:/)
trailing separators are kept.  */
path.normalize()   // TypeError
path.normalize('') // '.'
path.normalize('/foo/bar//baz/asdf/quux/..')         // '/foo/bar/baz/asdf'
path.normalize('C:\\temp\\\\foo\\bar\\..\\')         // 'C:\\temp\\foo\\'
// windows recognizes both path separators
path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar') // 'C:\\temp\\foo\\bar'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// resolve vs normalize
// resolve:    creates an absolute path.
// normalize:  removes extra ., .., from the path.

// example:
process.cwd()                           // '/Users/mtilley/src/testing'
path.normalize('../../src/../src/node') // '../../src/node'
path.resolve('../../src/../src/node')   // '/Users/mtilley/src/node'
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@