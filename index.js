let express = require('express');
let app = express();

app.get('/api/timestamp/:date_string?', function (req, res) {
  let date_string = new Date(parseInt(req.params.date_string));

  if (req.params.date_string == undefined) {
    let date_string = new Date();

    res.json({
      'unix': date_string.getTime(),
      'utc': date_string.toUTCString()
    });
  }

  else if (date_string == "Invalid Date") {
    res.json({ 'error': `${date_string}` });
  }

  else {
    res.json({
      'unix': date_string.getTime(),
      'utc': date_string.toUTCString()
    });
  }
});

let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});