let express = require('express');
let app = express();

app.enable('trust proxy');

app.get('/', function(req, res) {
	let ip = req.ip;
	let sysinfos = req.headers['user-agent'];
	let lang = req.headers['accept-language'];

	res.json({
		'ip': `${ip}`,
		'language': `${lang}`,
		'software': `${sysinfos}`
	});
})

console.log('Server is listening.');
app.listen(8080);
