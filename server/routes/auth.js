const express=require('express');
const route=express.Router();

// import validator
const {signupValidatores} =require('../validators/auth-validator');
const {runValidation}=require('../validators/index');
//Controller
const {signup ,activateAcount} =require('../controller/auth-controller');

//Get
route.post('/signup',signupValidatores,runValidation,signup)
route.post('/activate',activateAcount)
//Post 
//Del
//Update
module.exports=route;