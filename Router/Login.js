const express=require("express")
const loginController=require("../Controller/LoginController")
const loginRouter=express.Router()
loginRouter.route("/singup").post(loginController.signUp)
loginRouter.route("/signin").post(loginController.signIn)
loginRouter.route("/tokenParse").post(loginController.tokenParse)


module.exports=loginRouter;