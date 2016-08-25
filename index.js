var express = require('express');

var app = express();
app.listen(8000);

var tweets = [];

app.get('/', function(req, res){
    res.send('Welcome to Node Twitter');
});

app.post('/send', function(req, res){
    if(req.body && red.body.tweet) {
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