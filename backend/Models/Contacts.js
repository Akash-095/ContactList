const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: String,
    dob: Date,
    marital: String,
    Prof: String,
    gender: String,
    cnum: {
        type: Number,
        require: true,
        unique: true
    },
    mail: String,
    lang: String,
    add: String,
    zip: Number,
    city: String,
    state: String,
    country: String

});

const Contact = mongoose.model('contact', contactSchema);
Contact.createIndexes();
module.exports = Contact;