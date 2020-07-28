const express=require('express');
const route=express.Router();
//Controller
const {signup ,activateAcount} =require('../controller/auth-controller');

//Get
route.post('/signup',signup)
route.post('/activate',activateAcount)
//Post 
//Del
//Update
module.exports=route;