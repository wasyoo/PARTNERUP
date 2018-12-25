const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name     : String,
    email    : { type: String, unique: true, index: true },
    password : String,
})

userSchema.toJSON = function user() {
    return {
        id: this._id,
        name : this.name,
        email: this.email,
        password : this.password,
    };
};

module.exports = mongoose.model('User', userSchema)