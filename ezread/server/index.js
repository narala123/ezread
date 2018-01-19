/**
 * Created by nikhi on 7/31/2017.
 */
var express = require('express');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var phonicList = require('./models/phonicSchema');

var fs = require('fs');

var app = new express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", " * ");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");

  if (req.method == "OPTIONS") {
    res.statusCode = 204;
    return res.send();
  } else {
    return next();
  }

});


var loginApi = require('./routes/userApi')(app, express);
app.use('/loginApi', loginApi);

var regApi = require('./routes/regUserApi')(app, express);
app.use('/regApi', regApi);

var wordApi = require('./routes/wordsApi')(app, express);
app.use('/wordApi', wordApi);

var categoryApi = require('./routes/categoriesApi')(app, express);
app.use('/categoryApi', categoryApi);


/*mongodb://kidslearning:gis@123@ds129004.mlab.com:29004/kidslearning*/
mongodb://ezreadadmin:ezread123@ds147034.mlab.com:47034/ezread-users
  mongoose.connect('mongodb://ezreadadmin:ezread123@ds147034.mlab.com:47034/ezread-users', function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log("database connected");
  });

app.listen(3001, function (err, result) {

  if (err) {
    console.log(err);
  }
  console.log("i am listning at 3000");


});
