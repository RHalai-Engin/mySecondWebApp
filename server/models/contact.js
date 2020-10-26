let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
    name: String,
    address: String,
    country: String,
    contact: String,
    email: String
},
{
    collection: "Contacts"
});

module.exports = mongoose.model('Contact', contactModel);