const express = require('express');
const router = express.Router();
const path = require('path');
const multer  = require('multer')
const fs = require('file-system');
const imageUpload = require('../utils/photo');
const Model = require('../models/blog');
const Contact = require('../models/email-sender');


const { adminSignUp } = require('../controllers/user.admin');


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
  const userTesty = Model.find({})
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(6)
      .exec((err, result)=>{
  if(result)
  res.render('blog', {data: result });
});
});


router.get('/blog-detail', function(req, res, next) {
   const userTesty = Model.find({})
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(4)
      .exec((err, result)=>{
  if(result)
  res.render('blog-detail', {data: result });
});
});







/* GET service page. */
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'EagleHouse'});
});


// /* GET single page. */
router.get('/single', function(req, res, next) {
  res.render('single', { title: 'EagleHouse'});
});




/* GET contact page. */
router.get('/accounts', function(req, res, next) {
  const userTesty = Model.find({})
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(5)
      .exec((err, result)=>{
  if(result)
  res.render('accounts', {data: result });
});
});





/* GET contact page. */
router.get('/admin', function(req, res, next) {
  const userTesty = Model.find({})
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(8)
      .exec((err, result)=>{
  if(result)
   
  res.render('admin', {data: result });
});
});




/* GET contact page. */
router.get('/testimony', function(req, res, next) {
  res.render('testimony', {});
});



/* GET contact page. */
router.get('/edit', function(req, res, next) {
  res.render('edit-product', {});
});



/* GET contact page. */
router.get('/login', function(req, res, next) {
  res.render('login', {});
});



/* GET contact page. */
router.get('/products', function(req, res, next) {

  const page = parseInt(req.query.page, 1);
  const limit = Model.find('Blog').count();
  const pages = limit/page;
  
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
// const {page, limit } = req.query;
const userTesty = Model.find({})
      .sort({ createdAt: -1 })
      .skip(0)
      .limit(10)
      .exec((err, result)=>{
  if(result)
  res.render('products', {data: result, pages:pages });
});
  
});





module.exports = router;
