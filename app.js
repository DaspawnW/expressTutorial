var express = require('express');


var app = express();
//WICHTIG
//Dies erlaubt dateneingang
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname + '/html'));
app.use(express.static(__dirname + '/style'));


app.post('/address', function(req, res) {
	console.log(req.body);
	res.redirect('index.html');
});


app.listen(8080);