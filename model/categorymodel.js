var mongoose = require('mongoose');

//add category
var categoryschema = new mongoose.Schema({
    title:{
        type:String,
    },
    category:{
        type:String
    }
});

module.exports = mongoose.model("category",categoryschema);