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

//methods