var express = require('express');
var router = express.Router();
var admin = require("../controller/admincontroller"); 


//admin data insert and get
router.post("/",admin.admin);
router.get("/",admin.get_data)

//admin login and logout
router.post("/login",admin.login);
router.get("/logout",admin.logout);

//admin side blog add,update,delete and view
router.post("/addblog",admin.addblog)
router.post("/updateblog/:id",admin.updateblog)
router.get("/deleteblog/:id",admin.deleteblog)
router.get("/viewblog",admin.viewblog)

//admin side category add,update,delete and view
router.post("/addcategory",admin.addcategory)
router.post("/updatecategory/:id",admin.updatecategory)
router.get("/deletecategory/:id",admin.deletecategory)
router.get("/viewcategory",admin.viewcategory)

//admin side blogger add,update,delete and view
router.post("/addblogger",admin.addblogger)
router.post("/updateblogger/:id",admin.updateblogger)
router.get("/deleteblogger/:id",admin.deleteblogger)
router.get("/viewblogger",admin.viewblogger)


module.exports = router;