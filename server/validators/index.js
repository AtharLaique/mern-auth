const {validationResult}=require('express-validator');
exports.runValidation=(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        res.status(422)
           .json({error:error[0].array()[0].msg})
    }
}