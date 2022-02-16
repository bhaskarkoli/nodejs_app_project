var express = require('express');
var app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
    res.send('{ "response": "Hello From FUTURESCAPE T" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome to Futurescape W" }');
=======
    res.send('{ "response": "Hello From FUTURESCAPE" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Welcome to Futurescape World !!!!!!!!!!" }');
>>>>>>> 2e77e397aeb306ce8c62c00596f959ed8dd79c5c
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, It works! Welcome to Futurescape Technologies P" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
