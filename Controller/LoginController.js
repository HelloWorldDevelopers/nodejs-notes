const User = require('../Model/UserModel')
const tokenFunction = require('../JWT/Token');
const { json } = require('body-parser');
const express = require("express")
const app = express(); 
app.use(express.json())
module.exports.signUp = async (req, res) => {
    const newUser = new User({
        fName:req.body.fName,
        lName:req.body.lName,
        password:req.body.password,
        email:req.body.email,
        age:req.body.age
    });
 
      if (!newUser) {
        res.send(
            {
                message: "some fileds are null",
                success: false
            }
        )
    }
    const savedUser = await newUser.save();
    if (!savedUser) {
        res.send(
            {
                message: "error occor during saving the data",
                success: false
            }
        )
    }
    res.send({
        message: "you are register",
        success: true
    })

};

module.exports.signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const userData = await User.findOne({
        email: email, password: password
    });
    if (!userData) {
        res.status(404).json({
            data: null,
            message: "you are not authorised",
            success: false
        })
    } else {
        const payload = {
            email: userData.email,
            fName: userData.fName,
            lName: userData.lName
        };
        const genratedToken = tokenFunction.tokenCreationAfterLogin(payload)
        res.send({
            token: genratedToken,
            userId: userData._id,
            fullName: `${userData.fName} ${userData.lName}`,
            success: true
        })
    }
}
module.exports.tokenParse = async (req, res) => {
    const { token } = req.body;
    console.log(token);
    const payload = tokenFunction.parseGenratedToken(token)
    if (!payload) {
        res.status(404).json({
            "message": "token not valid"
        })
    }
    res.send({
        payload: payload
    })
};
