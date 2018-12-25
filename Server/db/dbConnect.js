const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = async function dbConnect() {
    mongoose.connection
        .on('error', (error) => { console.log(`MongoDB Connection error ${error}`); })
        .on('close', () => { console.log('Mongodb closed!'); })
        .once('open', () => { console.log('Mongodb connected!'); });

    // mongoose.connect("mongodb://127.0.0.1:27017/partnerup");
    await mongoose.connect('mongodb://partnerup_db:partnerup2018@ds145923.mlab.com:45923/partnerup')
}