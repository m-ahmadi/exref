var settings = {
  crossDomain: true,
  url: 'http://service.tsetmc.com/WebService/TseClient.asmx',
  method: 'POST',
  headers: {
    'Content-Type': 'text/xml;charset=UTF-8',
    'Cache-Control': 'no-cache'
  },
  data: '<?xml version="1.0" encoding="utf-8"?>\r\n<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">\r\n  <soap:Body>\r\n    <InstrumentAndShare xmlns="http://tsetmc.com/">\r\n      <DEven>20190803</DEven>\r\n      <LastID>-100</LastID>\r\n    </InstrumentAndShare>\r\n  </soap:Body>\r\n</soap:Envelope>'
}

$.ajax(settings).done(function (response) {
  console.log(response);
});