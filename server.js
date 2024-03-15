const express=require("express")
const cors = require('cors');
const loginRouter=require("./Router/Login")
const notesRouter=require("./Router/NotesRouter")
const bodyParser = require('body-parser');


const mongoose=require("mongoose")
    
require('dotenv').config();
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json())


 
app.use("/api/v1/authenticate",loginRouter)
app.use("/api/v1/notes",notesRouter)
app.listen(process.env.PORT,()=>{
    console.log("server started with out error");
})