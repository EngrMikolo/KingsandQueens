var express = require('express');
var bodyParser = require('body-parser');
var config = require('./config');
var nodemailer = require('nodemailer');
// var mongoose = require('mongoose');

var app = express();

var http = require('http').Server(app);

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "kingsandqueenschoir.info@gmail.com",
        pass: "wonderscamp"
    }
});
// var io = require('socket.io')(http)

// mongoose.connect(config.database, function(err) {
// 	if(err){
// 		console.log(err);
// 	} else {
// 		console.log('Connected to the database');
// 	}
// });

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
// app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));


// var api = require('./app/routes/api')(app, express, io);
// app.use('/api', api);
	// console.log("got to server.js");
app.post('/sendmail',function(req,res){
	var mailOptions = {
		   from: req.body.from,
		   to : "kingsandqueenschoir.info@gmail.com",
		   subject : req.body.subject,
		   text : req.body.text
		};
	
		smtpTransport.sendMail(mailOptions, function(error, response){
		if (error) {
		console.log(error);
		res.end("error has occured");
		}
		else{
		console.log("Message sent: " + response.message);
		res.end("sent");
		}
		});
});


app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/app/views/index.html');
});



http.listen(config.port, function(err){
if(err){
	console.log(err);
}else{
	console.log("Listening on port 3000");
}
});