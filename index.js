var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From FUTURESCAPE T" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome to Futurescape W" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! Welcome to Futurescape Technologies P" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
