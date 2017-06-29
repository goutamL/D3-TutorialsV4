var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var app= express(); 

//app.use('/api', router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app')));
// app.set('/css', __dirname + '/css');

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/app/index.html');
});


app.listen(8086,function(){
	console.log("server listening: 8086");
});