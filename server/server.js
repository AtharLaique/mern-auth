const express=require("express");
const app=express();
const port =process.env.port || 3001
app.get('/api/welcome',(req,res)=>{
    res.send({message:"Welcome"})
})
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})