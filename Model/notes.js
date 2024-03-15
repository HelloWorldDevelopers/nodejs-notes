const mongoose = require('../db/dbConnect');

 const notesSchema = new mongoose.Schema({ 
    
     title: { 
        type: String
    },
    statue:{
        type:String
    },
    content:{
        type:String
    },
    date:{
        type:String,
        default:new Date()
    },
    notes:[
        {
            userId:{
                type: mongoose.Schema.Types.ObjectId, ref: 'newdocuments' 
            }
        }
    ]
})
const notes = mongoose.model('notes', notesSchema);
module.exports = notes;