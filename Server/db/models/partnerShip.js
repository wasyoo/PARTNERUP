const mongoose = require('mongoose')

const partnerUpSchema = new mongoose.Schema({
    message : String,
    state   : Boolean,
    date    : Date,
    user1Id : String,
    user2Id : String,
    needsId : String
})

module.exports = mongoose.model('PartnerUp', partnerUpSchema)