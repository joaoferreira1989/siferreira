var express = require('express');
var app = express();
var pg = require('pg');

// Serve static files
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/client/dist'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Application routes
app.get('/', function(request, response) {
    response.sendFile(__dirname + '/client/dist/index.html');
});

// Run server
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});