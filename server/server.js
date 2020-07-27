const express=require("express");
const app=express();
const morgan=require('morgan');
require('dotenv').config();

const port =process.env.PORT || 3001

//Routes
const authRoute=require('./routes/auth');
// App Middlewares
app.use(morgan('dev'))
//Middleware
app.use('/api/auth',authRoute);
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})