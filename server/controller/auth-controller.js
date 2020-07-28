const User = require("../models/user");
//Signup
exports.signup = (req, res) => {
  const { name, email, password } = req.body;
  User.find({ email }).exec((error, data) => {
    if (error){
        return res.status(400).json({ msg: error });
    }
    if(data.length > 0){
        return res.status(422).json({ msg:"This email is already exist" });
    } 
    let newUser=new User({name:name,email:email,password:password})
        newUser.save((error, result)=>{
            if (error){
                return res.status(400).json({ msg: error });
            }
            return res.status(200).json({ msg:"Signup Success : Please Signin !" });
        })
               
  });
};

// Get signup para meters OK
// Check weather email exsit or not OK
// If exist already then return error OK
// If not then  ceate user with hashed password OK
// then save document and return responce 
