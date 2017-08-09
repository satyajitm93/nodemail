var express=require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app=express();
app.set('port', (process.env.PORT || 3000));

//Set up template Engine
app.set('view engine','jade');

app.get('/contact',function(req,res){

res.render('contact', { title: 'Satyajit - Contact', page: 'contact' });
});
app.post('/contact',urlencodedParser, function (req, res) {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'codingninja93@gmail.com',
      pass: '*********************'
    }
  });
  //Mail options
  var mailOptions = {
    from: 'codingninja93@gmail.com',
    to: req.body.email,
    subject: 'Sending Email using Node.js',
    text: req.body.message
  };
  transporter.sendMail(mailOptions, function (error, response) {
      //Email not sent
      if (error) {
          res.render('contact', { title: 'Satyajit - Contact', msg: 'Error occured, message not sent.', err: true, page: 'contact' })
      }
      //Yay!! Email sent
      else {
          res.render('contact', { title: 'Satyajit - Contact', msg: 'Message sent! Thank you.', err: false, page: 'contact' })
      }
  });
});

  app.listen(app.get('port'), function(){

console.log('You are listening to port ' ,app.get('port'));
});
