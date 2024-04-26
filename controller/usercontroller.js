var blogmodel = require('../model/blogmodel');


//user side only accepeted blog view
exports.viewblog = async (req, res) => {
    var data = await blogmodel.find({"__v": "1"});

    if(data.length>0){
        res.status(200).json({
            data
        })
    }
    else{
        res.status(200).json({
            status:"Data Not Found"
        })
    }
}