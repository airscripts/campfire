//Setting the modules that we'll need in the API
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//Enables trust proxy for the req.ip
app.enable('trust proxy');

//Get method that requests for ip, language and software and then shows it into a json
app.get('/', function(req, res) {
	let ip = req.ip;
	let lang = req.headers['accept-language'];
	let sysinfos = req.headers['user-agent'];
	res.json({'ipaddress': `${ip}`, 'language': `${lang}`, 'software': `${sysinfos}`});
})

//Putting the server into listening state
console.log('Server is listening.');
app.listen(8080);
