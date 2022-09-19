const express = require('express');
const fs = require('file-system');

const { adminSignUp, adminLogin } = require('../controllers/user.admin');
const { addBlog, adminBlog, updateBlog, } = require('../controllers/user.blog');
const upload = require('../utils/multer');




const router = express.Router();





router.post('/create', adminSignUp );
router.post('/login', adminLogin );
router.post('/add',upload.single("file"), addBlog );
router.get('/find', adminBlog );
router.put('/update', updateBlog );

/*



/* GET contact page. */
router.get('/admin', function(req, res, next) {
    res.render('admin', {});
  });



/* GET contact page. */
router.get('/accounts', function(req, res, next) {
    res.render('accounts', {});
  });
  

  
  
  /* GET contact page. */
  router.get('/edit-product', function(req, res, next) {
    res.render('edit-product', {});
  });
  
  
  
  /* GET contact page. */
  router.get('/login', function(req, res, next) {
    res.render('login', {});
  });
  
  
    
  



// router.post('/upload', upload.single('./images'), (req, res) => {
//   const img = fs.readFileSync(req.file.path);
//   const encode_image = img.toString('base64');
//   // Define a JSONobject for the image attributes for saving to database

//   const finalImg = {
//       contentType: req.file.mimetype,
//       image: Buffer.from(encode_image, 'base64')
//   };
//    db.collection('photo').insertOne(finalImg, (err, result) => {
//       console.log(result)
//       if (err) return console.log(err)
//       console.log('saved to database')
//       res.render('picture', {})
//   });
// });







module.exports = router;
