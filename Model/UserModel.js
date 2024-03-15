 const mongodb=require("../db/dbConnect")

const userSchema = new mongodb.Schema({
     fName: { type: String, required: false },
    lName: { type: String, required: false },
    email: { type: String, required: false },
    password: { type: String, required: false },
    age: { type: Number, required: false },
    profile: { type: String, required: false }

});
const ObjectMydb = mongodb.model("newdocuments", userSchema);
module.exports=ObjectMydb;  