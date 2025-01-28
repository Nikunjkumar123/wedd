const mongoose = require("mongoose");

const connectDB = (URL)=>{
    mongoose.connect(URL).then(()=>{
        console.log("connected to db");
    }).catch(()=>{
        console.log("connection Error");
    })
}

module.exports = connectDB;