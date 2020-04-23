'? + * ()'                // represent regex operators
'- .'                     // interpreted literally
'/$book' => '/([\$])book' // $ sign must be enclosed within ([])

app.get('/',            (0, res) => res.send('root'))        // /
app.get('/about',       (0, res) => res.send('about'))       // /about
app.get('/random.text', (0, res) => res.send('random.text')) // /random.text
app.get('/ab?cd',       (0, res) => res.send('ab?cd'))       // /acd, /abcd
app.get('/ab+cd',       (0, res) => res.send('ab+cd'))       // /abcd, /abbcd, /abbbcd, ...
app.get('/ab*cd',       (0, res) => res.send('ab*cd'))       // /abcd, /abxcd, /abRANDOMcd, /ab123cd, ...
app.get('/ab(cd)?e',    (0, res) => res.send('ab(cd)?e'))    // /abe, /abcde
app.get(/a/,            (0, res) => res.send('/a/'))         // anything with an 'a' in it
app.get(/.*fly$/,       (0, res) => res.send('/.*fly$/'))    // butterfly, dragonfly, but not butterflyman, dragonflyman