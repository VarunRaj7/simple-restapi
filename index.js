var express = require('express');
var app = express();
const PORT = process.env.PORT || 8080

app.get('/', function (req, res) {
  console.log("Received request")
  res.send('Hello Varun!');
});

app.listen(PORT, function () {
  console.log(`simple rest api listening on port ${PORT}!`);
});