var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/temp', function (req, res, next) {
  res.render('temp', { title: 'Express' });
});

router.post('/login', function (req, res, next) {  //Test

  console.log(req.body);
  res.render('index', { title: 'Express' });
});

router.post('/register', function (req, res, next) {  //Test

  console.log(req.body);
  res.render('temp', { title: 'Express' });
});

module.exports = router;
