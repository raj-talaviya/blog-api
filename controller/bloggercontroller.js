var bloggermodel = require('../model/bloggermodel');
var blogmodel = require('../model/blogmodel');
var bcrypt = require('bcrypt');
var blogger_status = "";

//blogger login
exports.bloggerlogin = async (req, res) => {
    var data = await bloggermodel.find({ "email": req.body.email });
    if (blogger_status == 0) {
        if (data.length == 1) { 
            bcrypt.compare(req.body.password, data[0].password, function (err, result) {
                if (result == true) {
                    blogger_status = 1
                    res.status(200).json({
                        status: "Login Success"
                    })
                }
                else {
                    res.status(200).json({
                        status: "Check Your Email And Password"
                    })
                }
            });
        } else {
            res.status(200).json({
                status: "Check Your Email And Password"
            })
        }
    } else {
        res.status(200).json({
            status: "Blogger Is Already Login"
        })
    }
}

//blogger logout
exports.bloggerlogout = (req, res) => {
    blogger_status = 0;
    res.status(200).json({
        status: "Blogger Logout"
    })
}

//add blog
exports.addblog2 = async (req, res) => {
    var data = await blogmodel.create(req.body);
    res.status(200).json({
        status: "Add Blog",
        data
    })
}

//blog update
exports.updateblog2=async(req,res)=>{
    var id=req.params.id
    var data = await blogmodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"Blog Update",
        data
    })
}

//blog delete
exports.deleteblog2=async(req,res)=>{
    var id=req.params.id
    var data = await blogmodel.findByIdAndDelete(id)
    res.status(200).json({
        status:"Blog Delete",
        data
    })
}

//view blog
exports.viewblog2 = async (req, res) => {
    if(blogger_status==1){
        var data = await bloggermodel.find({"email":req.body.email})
        if(data.length>0){
            var get_blog = await blogmodel.find({"author":data[0].name})
            if(get_blog.length>0){
                res.status(200).json({
                    get_blog
                })
            }
            else{
                res.status(200).json({
                    status:"Blog Not Added"
                })
            }
        }
        else{
            res.status(200).json({
                status:"Plzz Login"
            })
        }
    }
    else{
        res.status(200).json({
            status:"Plzz Login"
        })
    }
}