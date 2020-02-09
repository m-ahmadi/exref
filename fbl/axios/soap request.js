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