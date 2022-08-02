let input = document.getElementById('input');
let btn = document.getElementById('btn');
let msg = document.getElementById('msg');

// top level await only in chrome 89+
(async () => {
	
	// get active tab
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	// get all cookies
	let url = new URL(tab.url);
  let domain = url.hostname;
	let cookies = await chrome.cookies.getAll({ domain });
	
	// remove cookie
	let cookie = cookies[0];
	let protocol = cookie.secure ? 'https:' : 'http:';
	let cookieUrl = `${protocol}//${cookie.domain}${cookie.path}`;
	chrome.cookies.remove({
		url: cookieUrl,
		name: cookie.name,
		storeId: cookie.storeId,
	});
	
	
	btn.onclick = function () {
		msg.innerText = input.value;
	};
	
})();
