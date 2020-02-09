// localStorage
// data stored in localStorage has no expiration time.
// up to 10MB of data per origin can be stored.

localStorage.setItem('myCat', 'Tom');

var cat = localStorage.getItem('myCat');

localStorage.removeItem('myCat');

// clear all items
localStorage.clear();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* sessionStorage
	data stored in sessionStorage gets cleared when the page session ends.
	up to 10MB of data per origin can be stored.
	
	each tab of the browser has its own session.
	a page session starts when a new tab is opened and ends when either that tab or the browser is closed.
	a new page session will not be created if:
		an already opened tab is reloaded.
		a closed tab is restored.
	when a tab or the browser is closed the sessionStorage data is deleted. (unless restored)
*/

sessionStorage.setItem('key', 'value')   // save data
var data = sessionStorage.getItem('key') // get saved data
sessionStorage.removeItem('key')         // remove saved data
sessionStorage.clear()                   // remove all saved data
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// storage event
// fired only when a storage area (localStorage or sessionStorage) is changed from another tab/page

window.addEventListener('storage', function (e) {
	alert('storage is changed!')
});

sessionStorage.setItem('owner', 'mohammad') // won't work if on the same tab/page
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@