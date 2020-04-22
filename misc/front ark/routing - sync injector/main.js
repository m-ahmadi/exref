const req = new XMLHttpRequest();
req.open('GET', './_sidebar.html', false);
req.send(null);
const res = req.responseText;