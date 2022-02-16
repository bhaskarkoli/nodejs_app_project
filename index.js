var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From FUTURESCAPE TECHNOLOGY" }');
});

app.get('/adv', function (req, res) {
    res.send('{ "response": "Hello From FUTURESCAPE ADVERTISING" }');
});
app.get('/fin', function (req, res) {
    res.send('{ "response": "Hello From FUTURESCAPE FINANCE" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
