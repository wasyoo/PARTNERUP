const mongoose = require('mongoose')

const conversationSchema = new mongoose.Schema({
    user1Id : String,
    user2Id : String,
})

module.exports = mongoose.model('Conversation', conversationSchema)