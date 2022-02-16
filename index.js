var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('{ "response": "Hello From FUTURESCAPE TE" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome to Futurescape Wo" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! Welcome to Futurescape Technologies Pvt" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
