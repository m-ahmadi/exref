const nodemailer = require('nodemailer'); // npm i nodemailer

// basic flow


// 1. create a transporter
var transporter = nodemailer.createTransport({
	// https://nodemailer.com/extras/smtp-connection#options-reference
  host: 'smtp.example.com',
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
var transporter = nodemailer.createTransport({// same as:  service: 'gmail'
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {user: '', pass: ''},
});
var transporter = nodemailer.createTransport({// loose gmail config for cloud
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
	auth: {user: '', pass: ''},
});



// 2. verify the connection
try {
  await transporter.verify();
  console.log('Server is ready to take our messages');
} catch (err) {
  console.error('Verification failed:', err);
}



// 3. email options
var message = {
	from:    '"Example Team" <team@example.com>',  // sender address
	
	to:      'alice@example.com',
	// or
	to:      'alice@example.com, bob@example.com', // list of recipients
	// or
	to:      ['alice@example.com', 'bob@example.com'],
	
	subject: 'Hello',                              // subject line
	text:    'Hello world?',                       // plain text body
	html:    '<b>Hello world?</b>',                // HTML body
	attachments: [
		{filename: 'report.txt', path: './report.txt'}
	],
};



// 4. send email
try {
  var info = await transporter.sendMail(message);
  console.log('Message sent:', info.messageId);

  if (info.rejected.length > 0) {
    console.warn('Some recipients were rejected:', info.rejected);
  }
	
	// preview url is only available when using an Ethereal test account
  console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
} catch (err) {
	console.error('Error while sending mail:', err);
	
  switch (err.code) {
    case 'ECONNECTION':
    case 'ETIMEDOUT':
      console.error('Network error - retry later:', err.message);
      break;
    case 'EAUTH':
      console.error('Authentication failed:', err.message);
      break;
    case 'EENVELOPE':
      console.error('Invalid recipients:', err.rejected);
      break;
    default:
      console.error('Send failed:', err.message);
  }
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// send email from gmail account

// create "google app password" first
// https://myaccount.google.com/apppasswords

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'your_email@gmail.com',
		pass: 'your_app_password'
	}
});

// email options
var message = {
	from:    'your_email@gmail.com',
	to:      'receiver@example.com',
	subject: 'Hello from Node.js',
	text:    'This email was sent using Node.js and Nodemailer'
};

// send email
var info = await transporter.sendMail(message);

console.log('Email sent:', info);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
