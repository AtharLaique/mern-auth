const express=require("express");
const app=express();
const morgan=require('morgan');
const cors=require('cors');
const bodyParser=require('body-parser');
const db = require('./utils/db');
require('dotenv').config();

const port =process.env.PORT || 3001
// import validator
const {signupValidatores} =require('./validators/auth-validator');
const {runValidation}=require('./validators/index');
//Routes
const authRoute=require('./routes/auth');

// App Middlewares
db()
app.use(morgan('dev'));
if(process.env.NODE_ENV=='development'){
    app.use(cors({origin:'http://localhost:3000'}))
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
//Middleware
app.use('/api/auth',signupValidatores,runValidation,authRoute);
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})