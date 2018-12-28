const mongoose = require('mongoose')

const partnerUpSchema = new mongoose.Schema({
    message     : String,
    state       : String,
    seen        : { type : Boolean, default: false }, 
    date        : { type: Date, default: Date.now() },
    sender      : String,
    recipient   : String,
    needsId     : String
})

module.exports = mongoose.model('PartnerUp', partnerUpSchema)