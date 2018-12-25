const mongoose = require('mongoose')

const needsSchema = new mongoose.Schema({
    title   : String,
    content : String,
    date    : Date,
    userId  : String,
    Tags    : Array
})

module.exports = mongoose.model('Needs', needsSchema)