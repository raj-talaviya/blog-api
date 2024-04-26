var express = require('express');
var router = express.Router();
var blogger = require('../controller/bloggercontroller')

//blogger login and logout
router.post("/bloggerlogin",blogger.bloggerlogin);
router.get("/bloggerlogout",blogger.bloggerlogout);

//blogger side blog add,update,delete and view
router.post("/addblog",blogger.addblog2)
router.post("/updateblog/:id",blogger.updateblog2)
router.get("/deleteblog/:id",blogger.deleteblog2)
router.get("/viewblog",blogger.viewblog2)

module.exports = router;