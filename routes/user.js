const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user.js');


router.get("/users" , (req , res) => {
       usercontroller.allUsers(req , res);
})


router.get("/users/:id", (req , res) => {
    usercontroller.getUser(req,res);
})





module.exports = router;