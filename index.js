var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hi From FUTURESCAPE TECHNOLOGY - Version 4" }');
});

app.get('/adv', function (req, res) {
    res.send('{ "response": "Hi From FUTURESCAPE ADVERTISING" }');
});
app.get('/fin', function (req, res) {
    res.send('{ "response": "Hi From FUTURESCAPE FINANCE" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
