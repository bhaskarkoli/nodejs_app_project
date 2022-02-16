var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('{ "response": "Hello From FUTURESCAPE TEA" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome to Futurescape Wor" }');
});

app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! Welcome to Futurescape Technologies Pvt L" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
