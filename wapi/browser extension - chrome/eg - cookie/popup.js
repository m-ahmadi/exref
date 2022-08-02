let btn = document.getElementById('btn');
let msg = document.getElementById('msg');

(async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	let url = new URL(tab.url);
  let domain = url.hostname;
	
	let cookies = await chrome.cookies.getAll({ domain });
	
	btn.onclick = function () {
		msg.innerText = JSON.stringify([...cookies]);
	};
	
})();