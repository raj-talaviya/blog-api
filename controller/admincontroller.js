var adminmodel = require('../model/adminmodel');
var blogmodel = require('../model/blogmodel');
var categorymodel = require('../model/categorymodel');
var bloggermodel = require('../model/bloggermodel');
var bcrypt = require('bcrypt');
var login_status = "";

//admin data insert
exports.admin = async (req, res) => {
    var b_pass = await bcrypt.hash(req.body.password, 10)
    req.body.password = b_pass;
    var data = await adminmodel.create(req.body);
    res.status(200).json({
        status: "data insert",
        data
    })
}

//admin login
exports.login = async (req, res) => {
    var data = await adminmodel.find({ "email": req.body.email });
    if (login_status == 0) {
        if (data.length == 1) {
            bcrypt.compare(req.body.password, data[0].password, function (err, result) {
                if (result == true) {
                    login_status = 1
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
            status: "User Is Already Login"
        })
    }
}

//admin logout
exports.logout = (req, res) => {
    login_status = 0;
    res.status(200).json({
        status: "User Logout"
    })
}

//get_data(view) admin
exports.get_data = async (req, res) => {
    var data = await adminmodel.find();
    res.status(200).json({
        data
    })
}

//add blog
exports.addblog = async (req, res) => {
    var data = await blogmodel.create(req.body);
    res.status(200).json({
        status: "Add Blog",
        data
    })
}

//blog update
exports.updateblog=async(req,res)=>{
    var id=req.params.id
    var data = await blogmodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"Blog Update",
        data
    })
}

//blog delete
exports.deleteblog=async(req,res)=>{
    var id=req.params.id
    var data = await blogmodel.findByIdAndDelete(id)
    res.status(200).json({
        status:"Blog Delete",
        data
    })
}

//view blog
exports.viewblog = async (req, res) => {
    var data = await blogmodel.find();
    res.status(200).json({
        data
    })
}

//add category
exports.addcategory = async (req, res) => {
    var data = await categorymodel.create(req.body);
    res.status(200).json({
        status: "Add Category",
        data
    })
}

//category update
exports.updatecategory=async(req,res)=>{
    var id = req.params.id
    var data = await categorymodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"Category Update",
        data
    })
}

//category delete
exports.deletecategory=async(req,res)=>{
    var id = req.params.id
    var data = await categorymodel.findByIdAndDelete(id)
    res.status(200).json({
        status:"Category Delete",
        data
    })
}

//view category
exports.viewcategory = async (req, res) => {
    var data = await categorymodel.find();
    res.status(200).json({
        data
    })
}

//add blogger
exports.addblogger = async(req,res) => {
    var b_pass = await bcrypt.hash(req.body.password, 10)
    req.body.password = b_pass;
    var data = await bloggermodel.create(req.body);
    res.status(200).json({
        status:"Blogger Add",
        data
    })
}

//blogger update
exports.updateblogger = async(req,res)=>{
    var id = req.params.id
    var data = await bloggermodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"Blogger Update",
        data
    })
}

//blogger delete
exports.deleteblogger = async(req,res)=>{
    var id = req.params.id
    var data = await bloggermodel.findByIdAndDelete(id)
    res.status(200).json({
        status:"Blogger Delete",
        data
    })
}

//view blogger
exports.viewblogger = async (req, res) => {
    var data = await bloggermodel.find();
    res.status(200).json({
        data
    })
}


