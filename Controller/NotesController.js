const User = require("../Model/UserModel")
const Notes = require("../Model/notes")
module.exports.addNote = async (req, res) => {
    const userId = req.params.userId;
    const currentUser = await User.findById({
        _id: userId
    })
    console.log(currentUser);
    const saveNote = new Notes({
        title: req.body.title,
        content: req.body.content
    });
    saveNote.notes.push({ userId: userId })
    const note = await saveNote.save();
    if (!note) {
        res.status(200).json({ success: false })
    } else {
        res.status(201).json({ success: true })
    }
}

module.exports.getAll = async (req, res) => {
    const userId = req.params.userId;
    const notes = await Notes.find({ 'notes.userId': userId }, { notes: 0 })
    res.send({
        data: notes
    })
}

module.exports.deleteNote = async (req, res) => {
    const noteiId = req.params.noteId;
    const notes = await Notes.findByIdAndDelete({ '_id': noteiId })
    if (!notes) {
        res.send({
            success: false
        })
    }
    else {
        res.send({
            success: true
        })
    }
}


module.exports.edit = async (req, res) => {
    const noteiId = req.params.noteId;



    const editNote = await Notes.findOneAndUpdate({ _id: noteiId }, req.body, { new: true })

    if (!editNote) {
        res.send({
            success: false
        })
    } else {
        res.send({
            success: true
        })
    }


}