const token=require("../JWT/Token")
module.exports.checckTokenPresend=((req,res,next)=>{

     const authHeader = req.headers['authorization'];
     if(!authHeader){
       return  res.status(500).json({
             message:"header is missing"
         })
     }
   
    next();
})