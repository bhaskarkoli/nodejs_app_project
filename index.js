var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('{ "response": "Hello From FUTURESCAPE !!!!!!!!!!!!!!!1" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome to Futurescape !!!!!!!!!!!!!" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! Welcome to Futurescape Technologies !!!!!!!!!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
