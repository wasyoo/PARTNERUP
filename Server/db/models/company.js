const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    taxReferenceNumber : String,
    name        : String,
    address     : String,
    phone       : String,
    email       : String,
    website     : String,
    logoUrl     : String,
    description : String,
    investor    : Boolean,
    userId      : String,
    tags        : Array
})

module.exports = mongoose.model('Company', companySchema)