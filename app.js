var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'codingninja93@gmail.com',
    pass: '****************'
  }
});

var mailOptions = {
  from: 'codingninja93@gmail.com',
  to: 'satya.iter@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That Was Easy'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
