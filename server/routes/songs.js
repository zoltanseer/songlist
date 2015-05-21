var cradle = require('cradle');
var connection = new(cradle.Connection)({
        host: 'https://zoltanseer.iriscouch.com',
        port: 443,
        cache: true,
        raw: false
    });
var db = connection.database('songapp');



exports.findById = function (req, res) {
  console.log(req, res);
};

exports.saveSong = function (req, res) {
    console.log("POST: ");
    console.log(req.body);
};

exports.findAll = function (req, res) {
    db.get('test/all', function (err, doc) {
        console.log(err, doc);
    });
    /*db.view('test/all', function (err, res) {
        console.log(err, res);
    });*/
};
