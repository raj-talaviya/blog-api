var mongoose = require('mongoose');

//Add blogger 
var bloggerschema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model("blogger",bloggerschema);