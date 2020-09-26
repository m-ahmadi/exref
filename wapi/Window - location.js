// all the same:
window.location = 'http://www.example.com'
window.location.href = 'http://www.example.com'
window.location.assign("http://www.example.com")

// different:
window.location.replace('http://google.com')

/* replace vs assign:
after using replace() the current page will not be saved in session History,
meaning the user won't be able to use the back button to navigate to it.

in other words:
replace() does not put the originating page in the session history,
meaning the user won't get stuck in a never-ending back-button fiasco.

if you want to simulate someone clicking on a link, use .href or .assign()
if you want to simulate an HTTP redirect, use .replace().
*/

// force reload from the server
window.location.reload(true)