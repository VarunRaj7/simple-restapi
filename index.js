var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080

app.get('/', function (req, res) {
  res.send('Hello Varun!');
});

app.listen(PORT, function () {
  console.log(`simple rest api listening on port ${PORT}!`);
});