var express = require('express');
var routing = express.Router();


//New Addition of Routing - Beg
var app = express();
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express: Adventure Trails' });
});


const myController = require('../Controller/myFlow');
routing.get('/packages', myController.getPackages);
routing.get('/about', myController.about);
routing.get('/contact', myController.contact);
routing.post('/bookpackage', myController.bookPackage);
routing.all('*', myController.invalid);
//New Addition of Routing - End

module.exports = routing;

/*
node app.js  //To start Express server

To test the get url from browser
localhost:1234/packages

To test the post url, must use the following from command prompt
curl -v -H "Content-Type: application/json" POST -d "{\"name\":\"abc\"}" http://localhost:1234/bookpackage 
*/
