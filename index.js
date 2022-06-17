var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hi From FUTURESCAPE TECHNOLOGY - Version 777777777" }');
});

app.get('/adv', function (req, res) {
    res.send('{ "response": "Hi From FUTURESCAPE ADVERTISING - Version 777777" }');
});
app.get('/fin', function (req, res) {
    res.send('{ "response": "Hi From FUTURESCAPE FINANCE - Version 777777 " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
