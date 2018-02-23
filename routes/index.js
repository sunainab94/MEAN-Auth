var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var User = require("../models/User");


router.get('/', auth.home);
router.get('/register', auth.register);
// route for register action
router.post('/register', auth.doRegister);
// route to login page
router.get('/login', auth.login);
// route for login action
router.post('/login', auth.doLogin);

module.exports = router;
