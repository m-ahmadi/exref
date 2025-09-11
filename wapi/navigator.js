// https://developer.mozilla.org/en-US/docs/Web/API/Navigator

// default locale
// how it is determined:  https://datatracker.ietf.org/doc/html/rfc5646
navigator.language  // 'en-GB'  (on laptop is 'en-US')
navigator.languages // ['en-GB', 'en-US', 'en', 'fa']


// detect when "user is leaving", send "special" request
// alt: fetch(url, {keepalive: true})
document.addEventListener('visibilitychange', () => {
	if (document.visibilityState === 'hidden') {
		navigator.sendBeacon('/log', analyticsData);
	}
});
