const express=require('express');
const route=express.Router();

// import validator
const {signupValidatores} =require('../validators/auth-validator');
const {runValidation}=require('../validators/index');
//Controller
const {signup ,activateAcount,signin} =require('../controller/auth-controller');

//Get

//Post 
route.post('/signup',signupValidatores,runValidation,signup)
route.post('/activate',activateAcount)
route.post('/signin',signin)

//Del
//Update
module.exports=route;