var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Varun!');
});

app.listen(8080, function () {
  console.log('simple rest api listening on port 8080!');
});