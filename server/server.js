var express = require('express'),
    path = require('path'),
    employees = require('./routes/songs');

var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/songs/:id', songs.findById);
app.get('/songs', songs.findAll);

app.listen(3000);
console.log('Listening on port 3000...');