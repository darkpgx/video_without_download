var express = require('express');
var app = express();
var port = process.env.PORT || 8888;
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(port);
