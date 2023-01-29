const express = require('express');
const router = express.Router();


const {signup, signin, signout, requireSignin} = require("../controllers/user");
const {userSignupValidator} = require('../validator');
// const {userById} = require('../controllers/user');

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);


module.exports = router;