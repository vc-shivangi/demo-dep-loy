
//Install express server
var express = require('express');
var path = require('path');

var app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/demo-deploy'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/demo-deploy/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);
