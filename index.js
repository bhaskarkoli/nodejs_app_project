var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From FUTURESCAPE Tech" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World of Futurescape Tech" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! Welcome to Futurescape Tech" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
