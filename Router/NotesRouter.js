const express=require("express")
const notesController=require("../Controller/NotesController")
const checckTokenPresend=require('../Middleware/CheckToken')
const notesRouter=express.Router()
notesRouter.route("/:userId").post(notesController.addNote)
notesRouter.route("/All/:userId").get(notesController.getAll)
notesRouter.route("/delete/:noteId").post(notesController.deleteNote)
notesRouter.route("/edit/:noteId").post(notesController.edit)
module.exports=notesRouter;