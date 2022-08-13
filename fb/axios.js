/*
	npm i axios
cdn
	https://unpkg.com/axios/dist/
	https://cdn.jsdelivr.net/npm/axios/
	https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js
*/

var response = axios(url=''|config, ?config={
// https://github.com/axios/axios#request-config
	url:                '',
	method:             'get|post|put|patch|delete',
	baseURL:            '',
	transformRequest:   [ (data, headers)=>data, ()=>, ... ],
	transformResponse:  [ (data)=>data, ()=>, ... ],
	headers:            {'': '', ...},
	params:             {} | URLSearchParams,
	paramsSerializer:   (params) => Qs.stringify(params), // https://npmjs.com/package/qs
	data:               {},
	timeout:            0,
	withCredentials:    false,
	adapter:            (config)=>,
	auth:               {username: '', password: ''},
	responseType:       'json|text|document|arraybuffer|stream|blobl', // 'blob' only in browser
	responseEncoding:   'utf8',
	xsrfCookieName:     'XSRF-TOKEN',
	xsrfHeaderName:     'X-XSRF-TOKEN',
	onUploadProgress:   (progressEvent)=>, // browser only
	onDownloadProgress: (progressEvent)=>, // ...
	maxContentLength:   2000,
	validateStatus:     (status)=> status>=200 && status<300,
	maxRedirects:       5,
	socketPath:         null,
	httpAgent:          new http.Agent({keepAlive: true}),
	httpsAgent:         new https.Agent({keepAlive: true}),
	proxy:              { host:'', port:0, auth:{username:'',password:''} },
	cancelToken:        new CancelToken((cancel)=>),
	decompress:         true,
})

response = {
	data:       {},
	status:     200,
	statusText: 'OK',
	headers:    {},
	config:     {},
	request:    {}
}

axios.get(url='', ?config)
axios.post(url='', ?data={}, ?config)
axios.request(config)

var instance = const instance = axios.create(?config)

axios()
	.then ( (response) => /*success*/ )
	.catch( (error)    => /*error*/   )
	.then ( ()         => /*always*/  );

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// node
const axios = require('axios');

axios({
	method: 'get',
	url: 'http://bit.ly/2mTM3nY',
	responseType: 'stream'
})
.then(function (response) {
	response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// download progress in node
const fs = require('fs');
const path = require('path');
const axios = require('axios');
const Progress = require('progress');

(async () => {
	const { data, headers } = await axios({
		url: 'https://file-examples-com.github.io/uploads/2017/10/file_example_JPG_2500kB.jpg',
		method: 'GET',
		responseType: 'stream'
	});
	
	const total = +headers['content-length'];
	const bar = new Progress('[:bar] :percent :etas', {total, width:40, renderThrottle:1});

	const writeStream = fs.createWriteStream('file.jpg');

	data.on('data', chunk => bar.tick(chunk.length));
	data.pipe(writeStream);
})()
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// soap request
var xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <InstrumentAndShare xmlns="http://tsetmc.com/">
      <DEven>20190803</DEven>
      <LastID>0</LastID>
    </InstrumentAndShare>
  </soap:Body>
</soap:Envelope>
`;

axios({
	url: 'http://service.tsetmc.com/WebService/TseClient.asmx',
	method: 'POST',
	headers: {
		"Content-Type": "text/xml;charset=UTF-8",
		"Accept-Encoding": "gzip,deflate",
		"SOAPAction": "http://tsetmc.com/InstrumentAndShare",
    "Cache-Control": "no-cache"
	},
	data: xmlBody
});
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@