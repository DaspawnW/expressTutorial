var express = require('express');


var app = express();
app.use(express.static(__dirname + '/html'));

app.get('/firstCall', function(request, response) {
	response.send('answer');
});

app.post()

app.listen(8080);