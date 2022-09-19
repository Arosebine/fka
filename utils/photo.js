const multer = require('multer');
const path = require('path');





module.exports = multer({
    storage: multer.diskStorage({
      // Destination to store image     
      destination: 'public', 
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '_' + Date.now() 
               + path.extname(file.originalname))
      }
    }),
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
  }) 





 





