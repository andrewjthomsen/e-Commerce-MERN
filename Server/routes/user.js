const express = require('express');
const router = express.Router();


// const { signup, signin, signout, requireSignin } = require("../controllers/user");
// const { userSignupValidator } = require('../validator');

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require('../controllers/user');


router.get('/secret/:userId,', requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile
  })
});
// router.post("/signup", userSignupValidator, signup);
// router.post("/signin", signin);
// router.get("/signout", signout);
router.param('userId', userById)

module.exports = router;