var express = require("express");
 var app = express()

// routing
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

app.listen(8080);