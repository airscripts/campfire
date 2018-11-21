//Setting the required modules for the timestamp microservice
var express = require('express');
var app = express();

//Setting the route for getting data
app.get('/api/timestamp/:date_string?', function(req, res) {
	//Declaring date_string that contains the timestamp in milliseconds
	let date_string = new Date(parseInt(req.params.date_string));

	//If we have an empty string in the url, we print the current timestamp
	if (req.params.date_string == undefined) {
		let date_string = new Date();
		res.json({'unix': date_string.getTime(), 'utc': date_string.toUTCString()});
	}

	//Otherwise, if we have a non-integer value, we receive invalid date on screen
	else if(date_string == "Invalid Date") {
		res.json({'error': `${date_string}`});
	} 

	//If none of the above were correct, we set the timestamp indicated in the url
	else {
		res.json({'unix': date_string.getTime(), 'utc': date_string.toUTCString()});
	}
});

//Listener var sets the server on listening
var listener = app.listen(process.env.PORT, function() {
	console.log('Your app is listening on port ' + listener.address().port);
});