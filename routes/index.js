const express = require('express');
const router = express.Router();
const path = require('path');
const multer  = require('multer')
const fs = require('file-system');
const imageUpload = require('../utils/photo');
const Model = require('../models/blog');


const { adminSignUp } = require('../controllers/user.admin');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'public')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })
 
// const upload = multer({ storage: storage })


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


// /* GET single page. */
// router.get('/single', function(req, res, next) {
//   res.render('single', { title: 'EagleHouse'});
// });


// /* GET picture page. */
// router.get('/picture', function(req, res, next) {
//   res.render('picture', { title: 'EagleHouse'});
// });

 
// // For Single image upload
// router.post('/upload', imageUpload.single('./images/img'), (req, res) => {
//   const img = fs.readFileSync(req.file.path);
//   const encode_image = img.toString('base64');
//   // Define a JSONobject for the image attributes for saving to database

//   const finalImg = {
//       contentType: req.file.mimetype,
//       image: Buffer.from(encode_image, 'base64')
//   };
//   res.send(req.file)
// }, (error, req, res, next) => {
//   res.render('picture', { error: error.message })
// });




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

// For multiple image upload

// router.post('/uploadBulkImage', imageUpload.array('images', 4),     (req, res) => {
//   res.send(req.files)
// }, (error, req, res, next) => {
//    res.status(400).send({ error: error.message })
// })




module.exports = router;
