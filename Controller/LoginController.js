const User = require('../Model/UserModel')
const tokenFunction=require('../JWT/Token');
const { json } = require('body-parser');
const express=require("express")
const app=express();
app.use(express.json())
module.exports.signUp= async(req,res)=>{
 
    console.log(req.body);

    const newUser = new User(req.body);
    console.log(newUser);
    if(!newUser){
        res.send(
            {
                message:"some fileds are null",
                success:false
             }
        )
    }
    const savedUser = await newUser.save();
    if(!savedUser){
        res.send(
            {
                message:"error occor during saving the data",
                success:false
        }
        )
    }
   res.send({
    message:"you are register",
    success:true
   })

};

module.exports.signIn= async(req,res)=>{

      const {email,password}=req.body;
      const userData=await User.findOne({
         email:email,password:password
        });
       

       if(!userData){
        res.status(404).json({
            "message":"you are not authorised"
        })
    }
    const payload = {
        email: userData.email,
        fName: userData.fName,
        lName: userData.lName
     };
    console.log(userData.email)
   const genratedToken=tokenFunction.tokenCreationAfterLogin(payload)
    res.send({
        token:genratedToken
    })

};
module.exports.tokenParse= async(req,res)=>{
    const {token}=req.body;
    console.log(token);
    const payload=tokenFunction.parseGenratedToken(token)
    if(!payload){
        res.status(404).json({
            "message":"token not valid"
        })
    }
    res.send({
        payload:payload
    })

};