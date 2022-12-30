const Blog = require('../models/blog');
const Admin = require('../models/user.model');
const cloudinary = require('../utils/cloudinary');




exports.addBlog = async (req, res) => {
   const id = req.params.id
    try {
        const userBlog = await Admin.findOne({ _id: id })
        if (!userBlog == "admin"){
            return res.status(400).json({ message: 'You are not permitted to perform this function'})
        }

        
        const {
            fullname,
            topic,
            description,
            date,
    
        } = req.body;
            const pic = await cloudinary.uploader.upload(req.file.path);

        const admin =await Blog.create({
            fullname,
            topic,
            description,
            picture: pic.secure_url,
            date,
            
        })
        res.redirect("admin");
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

exports.adminBlog = async (req, res) => {
    const userTopic = req.params.post;
    try {
        const { page, limit } = req.query; 
        const adminPost = await Blog.findOne()
        .sort({ createdAt: 1 })
        .skip((page - 1) * limit)
        .limit(limit * 1);
        return res.status(200).json({ count: adminPost.length, adminPost})
        
        
    } catch (error) {
        return res.status(400).json({ message: 'Please, use the post for finding'})
    }
};


exports. updateBlog = async (req, res) => {
    const id = req.params._id
    try {
        const user = await Admin.findOne(id);
        if (!user == 'admin'){
            return res.status(400).json({ message: 'Please, you are not allowed here'});
        }
        const userPost = await Blog.findByIdAndUpdate(
            {
                id: _id,
            },
            {
                topic,
                post,
                picture,
                video,
            },
            {
                new: true,
            }
        )
        return res.status(201).json({ message: 'they have been updated successfully', userPost});
        
    } catch (error) {
        return res.status(400).json({ message: 'Please, fill the field'});
    }
 };
// app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
//     const file = req.file
//     if (!file) {
//       const error = new Error('Please upload a file')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(file)
    
//   })



//   //Uploading multiple files
// app.post('/uploadmultiple', upload.array('myFiles', 12), (req, res, next) => {
//     const files = req.files
//     if (!files) {
//       const error = new Error('Please choose files')
//       error.httpStatusCode = 400
//       return next(error)
//     }
//       res.send(files)
//   })



  
 
// app.post('/upload', upload.single('myImage'), (req, res) => {
//     const img = fs.readFileSync(req.file.path);
//     const encode_image = img.toString('base64');
//     // Define a JSONobject for the image attributes for saving to database
 
//     const finalImg = {
//         contentType: req.file.mimetype,
//         image: Buffer.from(encode_image, 'base64')
//     };
//      db.collection('myCollection').insertOne(finalImg, (err, result) => {
//         console.log(result)
//         if (err) return console.log(err)
//         console.log('saved to database')
//         res.redirect('/')
//     });
// });




// // to retrieved images

// app.get('/photos', (req, res) => {
//     db.collection('myCollection').find().toArray((err, result) => {
//         const imgArray = result.map(element => element._id);
//         console.log(imgArray);
//         if (err) return console.log(err)
//         res.send(imgArray)
 
//     })
// });

// const ObjectId = require('mongodb').ObjectId;
 
// app.get('/photo/:id', (req, res) => {
//     const filename = req.params.id;
//     db.collection('myCollection').findOne({ '_id': ObjectId(filename) }, (err, result) => {
//         if (err) return console.log(err)
//         res.contentType('image/jpeg');
//         res.send(result.image.buffer)
//     })
// })



// // SET STORAGE
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, 'uploads')
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + '-' + Date.now())
//     }
//   })
   
//   const upload = multer({ storage: storage })