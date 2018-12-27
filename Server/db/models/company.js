const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    taxReference: String,
    name        : String,
    address     : String,
    phone       : String,
    email       : String,
    website     : String,
    filename     : String,
    description : String,
    //investor    : Boolean,
    userId      : String,
    tags        : Array,
    rating      : Number
})

module.exports = mongoose.model('Company', companySchema)