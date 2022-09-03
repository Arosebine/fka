var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', {});
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', {});
});


/* GET blog page. */
router.get('/blog', function(req, res, next) {
  res.render('blog', {});
});



/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'EagleHouse'});
});


/* GET single page. */
router.get('/single', function(req, res, next) {
  res.render('single', { title: 'EagleHouse'});
});




module.exports = router;
