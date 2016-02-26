
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var storage = require('./modules/storage')();
var leaderboard = require('./modules/leaderboard')(storage);

app.use(bodyparser.json())

app.get('/', function(req, res){
	leaderboard.get().then((data) => {
		res.send(data);
	}, () => {
		res.send([]);
	});
});

app.post('/', function(req, res){
	leaderboard.save(req.body).then(() => {
		res.send('Saved');
	},() => {
		res.send('Rejected');
	});
})

app.listen(8000);