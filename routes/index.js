var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pemp', function (req, res, next) {
  res.render('tester', { title: 'Express' });
});

router.post('/login', function (req, res, next) {  //Test

  console.log(req.body);
  res.render('temp', { title: 'Express' });
});

router.post('/loginPost', function (req, res, next) {  //Test
  
  /**
   * if success,  res.status(200).send('Success')
   * if failed,   res.status(300).send('Failed')
   */
    //res.send("Success");
    res.status(200).send('Authentication successful')
  });

router.post('/register', function (req, res, next) {  //Test

  console.log(req.body);
  res.render('temp', { title: 'Express' });
});

module.exports = router;
