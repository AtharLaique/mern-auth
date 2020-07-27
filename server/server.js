const express=require("express");
const app=express();
const morgan=require('morgan');
const cors=require('cors');
require('dotenv').config();

const port =process.env.PORT || 3001

//Routes
const authRoute=require('./routes/auth');
// App Middlewares
app.use(morgan('dev'));
if(process.env.NODE_ENV=='development'){
    app.use(cors({origin:'http://localhost:3000'}))
}
//Middleware
app.use('/api/auth',authRoute);
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})