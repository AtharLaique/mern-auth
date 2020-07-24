const express=require('express');
const route=express.Router();

//Get
route.get('/signup',(req,res)=>{
        res.status(200).json({message:"Signup"})
    })
//Post
//Del
//Update
module.exports=route;