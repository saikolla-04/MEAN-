
//New Addition of Routing - Beg
var app = express();
/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express: Adventure Trails' });
});


const myController = require('../Controller/myFlow');
routing.get('/packages', myController.getPackages);
routing.post('/bookpackage', myController.bookPackage);
routing.all('*', myController.invalid);
//New Addition of Routing - End


module.exports = routing;
