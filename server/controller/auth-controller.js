//Signup
exports.signup=(req,res)=>{
     console.log(req.body)
      res.status(200).json({message:"Signup"})
}