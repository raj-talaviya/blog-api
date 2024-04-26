var express = require('express');
var router = express.Router();
var users = require('../controller/usercontroller')

/* GET users listing. */
router.get("/viewblog",users.viewblog)

module.exports = router;
