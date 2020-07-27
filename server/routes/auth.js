const express=require('express');
const route=express.Router();
//Controller
const {signup} =require('../controller/auth-controller');

//Get
route.post('/signup',signup)
//Post 
//Del
//Update
module.exports=route;