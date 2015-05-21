var bodyParser = require('body-parser');
var express = require('express'),
    path = require('path'),
    songs = require('./routes/songs');

var app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.get('/songs/:id', songs.findById);
app.get('/songs', songs.findAll);
app.post('/song', songs.saveSong);

app.listen(3000);
console.log('Listening on port 3000...');