const mongoose=require('mongoose');
module.exports= function db(){
   mongoose.connect(process.env.DATABASE,{
       useNewUrlParser:true,
       useFindAndModify:false,
       useUnifiedTopology:true,
       useCreateIndex:true
   })
   .then((res)=>console.log("DB is connected now !"))
   .catch((err)=>console.log(err))
}