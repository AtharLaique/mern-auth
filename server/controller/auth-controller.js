const User =require('../models/user');
//Signup
exports.signup=(req,res)=>{
    console.log("Auth controller is called")
    //get parameters
    const {name,email,password}=req.body;
           User.find({email:email})
               .exec((err,val)=>{
                   if(val.length ==0)
                   {
                      let newUser=new User({name,email,password});
                      console.log(newUser);
                       res.status(200)
                          .json({message:'create user'})
                   }else{
                    res.status(422)
                    .json({message:'this email is already exist'})
                   }
               })
}