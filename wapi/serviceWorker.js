// main.js
var log = console.log;
navigator.serviceWorker.register('./path/to/service-worker.js', {scope: './'})
	.then(registration => {
		log('registration succeeded. scope is ' + reg.scope);
		
		let serviceWorker;
		if (registration.installing) {
			serviceWorker = registration.installing;
			log('installing';
		} else if (registration.waiting) {
			serviceWorker = registration.waiting;
			log('waiting')
		} else if (registration.active) {
			serviceWorker = registration.active;
			log('active');
		}
		if (serviceWorker) {
			serviceWorker.state
			
			serviceWorker.addEventListener('statechange', function (e) {
				e.target.data
			});
		}
		
	})
	.catch(err => {
		console.log('registration failed with ' + err);
	});

if (navigator.serviceWorker) throw new Error('not supported')

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// service-worker.js
self.addEventListener('install', function (event) {
	
})


self.addEventListener('activate', function (event) {
	
})

// listening for network requests from the main document
self.addEventListener('fetch', function (e) {
	e.respondWith( caches.match(e.request) );
})