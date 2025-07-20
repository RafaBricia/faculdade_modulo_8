let mongoose = require('mongoose')

let taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    finished: Boolean,
    person: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
})

module.exports = mongoose.model('Task', taskSchema);