const mongoose = require('mongoose');



const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    phone_number:{
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true,
        trim: true,
    },

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'admin',
      },

    
},
{
    timestamps: true,
},
);


module.exports = mongoose.model('User', adminSchema);