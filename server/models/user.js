const mongoose = require('mongoose');
//crypto built in nodejs
const crypto=require('crypto')
//user schema
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        max:32
    }, 
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true,
        unique:true
    },
    hashed_password:{
        type:String,
        required:true,
    },
    salt:String,
    role:{
        type:String,
        default:'subscribe'
    },
    resetPasswordLink:{
        type:String,
        default:''
    }
},{timestamps:true})

//virtual fileds 
UserSchema.virtual('password')
.set(function(password){
    //We will use simple function because we want to use this
    this._password=password;
    this.salt=this.makeSalt();
    this.hashed_password=this.encryptPassword()
    
})
.get(function(){
    return this.hashed_password;
})
//methods
UserSchema.methods={
    authenticate:function(plainText){
        return this.encryptPassword(plainText) == this.hashed_password;
    },
    encryptPassword:function(password){
        if(!password) return ""
       try{
           return crypto.createHmac('sha256',this.salt())
           .update(password)
           .digest('hex');
       }catch{
           return ''
       }
    },
    makeSalt:function(){
        return Math.round(new Data().valueOf()* Math.random())+''
    }
}
module.exports=mongoose.model('User' ,UserSchema);