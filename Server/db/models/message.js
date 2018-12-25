const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    content         : String,
    readingDate     : Date,  
    sendingDate     : Date,
    senderId        : String,
    conversationId  : String
})

module.exports = mongoose.model('Message', messageSchema)