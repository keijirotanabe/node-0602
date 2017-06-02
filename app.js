var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
	res.sendFile(__dirname + '/about.html');
});

http.listen(process.env.PORT || 3000, function() {
	console.log('Server listening on port 3000');
});