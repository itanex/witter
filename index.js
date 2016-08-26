var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.listen(8000);
app.use(bodyParser.urlencoded({ extended: false }))

var tweets = [];

app.get('/', function(req, res){
    res.send('Welcome to Node Twitter');
});

app.post('/send', function(req, res){
    if(req.body && req.body.tweet) {
        tweets.push(req.body.tweet);
        res.send({status: "ok", message: "Tweet Received"});
    } else {
        // no tweet?
        res.send({status: "nok", message: "No tweet received"});
    }
});

app.get('/tweets', function(req, res){
    res.send(tweets);
});