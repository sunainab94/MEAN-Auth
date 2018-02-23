var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var obj = {};

obj.home = function(req, res){
    res.render('index');
};

obj.register = function(req, res){
    res.render('register');
};

obj.doRegister = function(req, res){
    //register is part of passportlocalmongoose
    User.register(new User({name: req.body.fullname, username: req.body.username}), req.body.password, function (err, user) {
      if (err) {
        return res.render('register', { user: user });
      }
      //by default its local strategy
      passport.authenticate('local')(req, res, function () {
        res.redirect('/login');
      });
    });
};

obj.login = function(req, res){
    res.render('login');
};

obj.doLogin = function(req, res){
    var username = req.body.username;
    User.findOne({ 'username': username }, 'fullname', function (err, u) { //query and queried items stored in u
      if (err)
        return handleError(err);  
    });
  
    passport.authenticate('local')(req, res, function () {
      res.redirect('/profile');
    });
}

module.exports = obj;
