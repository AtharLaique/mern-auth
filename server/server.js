const express=require("express");
const app=express();
require('dotenv').config()
const port =process.env.PORT || 3001

//Routes
const authRoute=require('./routes/auth');
//Middleware
app.use('/api/auth',authRoute);
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})