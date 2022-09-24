const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    userId:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin",
    },
    username:{
        type: String,
    },

    topic: {
        type: String,
        
    },

    description:{
        type: String,
        
    },

    picture: {
        type: String,
        
    },


    date: {
        type: String,
    },

   
},
{
    timestamps : true,
},
)


module.exports = mongoose.model('Blog', blogSchema)