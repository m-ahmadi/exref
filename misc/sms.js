// sms.ir
(async () => {
	var data = {
		'lineNumber': 12345678912345,
		'messageText': 'Your text',
		'mobiles': [
			'09124442020',
			//'Your Mobile 2'
		],
		'sendDateTime': null
	};
	
	var resp = await fetch('https://api.sms.ir/v1/send/bulk', {
		method: 'POST',
		headers: {
			'X-API-KEY': '...',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data),
	});
	
	var res = await resp.json();
	
})();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// farazsms
// rough estimate code example
// can't send sms till provide papers

async function post(endpoint, data) {
	var resp = await fetch('https://api.iranpayamak.com/ws/v1'+endpoint, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	var res = await resp.json();
	return res;
}

(async () => {
	var auth = await post('/auth/login', {
		'username': 'foo',
		'password': 'bar',
		'method': null // nullable, sms | ga
	});
	
	var verif = await post('/auth/verify-2fa', {
    'token': '',      // ↑ auth.data.token,
		'code': '880263', // sent by sms
		'method': null    // nullable, sms | ga
	});
	
	//verif.data.accessToken
	
	var res = await post('/sms/sample', {
		'text': 'test text',
		'line_number': '50002178584000',
		'number_format': 'english',
		//'schedule': '2025-08-20 15:30:00', // nullable(chosen time to send)
	});
	
})();
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
