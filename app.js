var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var env = require('node-env-file');

env(__dirname + '/.env');

var storage = require('./modules/fbStorage')();
var leaderboard = require('./modules/leaderboard')(storage);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.use(bodyparser.json())

app.get('/', function(req, res){
	leaderboard.get().then((data) => {
		res.send(data);
	}, () => {
		res.send([]);
	});
});

app.post('/', function(req, res){
	leaderboard.set(req.body).then(() => {
		res.send({'state' : 'saved'});
	},() => {
		res.send({'state' : 'rejected'});
	});
})

app.listen(8000);