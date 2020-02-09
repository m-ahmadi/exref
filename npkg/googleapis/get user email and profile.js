var gapi = require('googleapis'),
	CLIENT_ID = '594204839102-7r5sejasdqalk1gkqpcs8fr9pr2t4pv5.apps.googleusercontent.com',
	CLIENT_SECRET = 'vEtC9DVxlTJadB9AEyldtAIV',
	REDIRECT_URL = 'http://localhost:1250/public/index.htm',
	OAuth2 = gapi.auth.OAuth2,
	oauth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL),
	scopes,
	url;
	
scopes = [
	'https://www.googleapis.com/auth/userinfo.email',
	'https://www.googleapis.com/auth/userinfo.profile'
],
url = oauth2Client.generateAuthUrl({
	//access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token) 
	scope: scopes // If you only need one scope you can pass it as string 
});

oauth2Client.getToken(req.code, function (err, tokens) {
	// Now tokens contains an access_token and an optional refresh_token. Save them. 
	if (!err) {
		oauth2Client.setCredentials(tokens);
		var url = 'https://www.googleapis.com/userinfo/v2/me?access_token=' + tokens.access_token;
		res.writeHead(302, {
			'Location': url
		});
		res.end();
		//res.send(tokens);
	}
});