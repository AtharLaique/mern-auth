const {validationResult}=require('express-validator');
exports.runValidation=(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        console.log(error)
        res.status(422)
           .json({error:error.errors[0].msg})
    }
    next();
}