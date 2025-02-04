const { timeStamp } = require('console');
const mongoose = require('mongoose');

const contactModel = new mongoose.Schema({
    "name":{
        type:String,
    },
    "email":{
        type:String,
    },
    "contact":{
        type:String,
    },
    "message":{
        type:String,
    }
},{timestamps:true});
module.exports = mongoose.model('contact',contactModel) ;