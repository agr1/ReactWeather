var express = require('express');

//Create our app
var app = express();

const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('https://' + req.hostname + req.url);
  }
  else {
    next();
  }
});

app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
