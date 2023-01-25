const express = require('express');
const router = express.Router();


const {create} = require("../controllers/menu");
const {requireSignin, isAuth, isAdmin} = require("../controllers/auth");

const { userById} = require("../controllers/menu");
router.post("/menu/create/:userId", requireSignin, isAdmin, isAdmin, create);

router.param("userId", userById);
module.exports = router;