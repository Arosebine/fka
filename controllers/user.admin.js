const User = require('../models/user.model');
const bcrypt = require("bcrypt");



exports.adminSignUp = async(req, res)=>{
    const {name,email, phone_number, password }=req.body;

    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);    
    try {       
        const new_user = await User.create({
            name,
            email,
            phone_number,
            password:hashedPassword
        })
    return res
      .status(201)
      .json({ message: 'successfully registered', new_user: new_user });

    } catch (error) {
        console.log(error);
    }
}


exports.adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!(email && password )){
            return res.status(400).json({ message:'please, fill the field'})
        };
        const checker = await User.findOne({ email })
       
        const checkpassword = await bcrypt.compare(password, checker.password)
       if(!checkpassword){
        return res.status(400).json({error:"invalid credentials"})
       }
        
        const user = await User.findOne({ email });
        res.redirect('admin');

    // res.redirect("post")




    }catch (error){
        console.log(error)
    }

};