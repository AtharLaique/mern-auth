const express=require('express');
const route=express.Router();
//Controller
const {signup} =require('../controller/auth-controller');

//Get
route.get('/signup',signup)
//Post 
//Del
//Update
module.exports=route;