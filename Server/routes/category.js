const express = require('express');
const router = express.Router();


const {create} = require("../controllers/category");
const {requireSignin, isAuth, isAdmin} = require('../controllers/auth');
const {userById} = require('../controllers/user');

router.post("/category/create/:userId", requireSignin, isAdmin, isAdmin, create);
// router.post("/category/create", requireSignin, isAdmin, isAdmin, create);


// router.param('categoryId', categoryById);
router.param("userId", userById);

module.exports = router;
