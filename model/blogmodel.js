var mongoose = require('mongoose');

//Add blog
var blogschema = new mongoose.Schema({
    title:{
        type:String,
    },
    blogname:{
        type:String,
    },
    author:{
        type:String
    }
});

module.exports = mongoose.model("blog",blogschema);