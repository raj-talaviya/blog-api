var mongoose = require('mongoose');

//admin login
var adminschema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model("admin",adminschema);