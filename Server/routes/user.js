const express = require('express');
const router = express.Router();

// const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const {signup, signin, signout} = require("../controllers/user");
const {userSignupValidator} = require('../validator/index');
// const { userById, read, update, purchaseHistory } = require('../controllers/user');

// router.get('/secret', requireSignin, (req, res) => {
// router.get((req, res) => {
//     res.json({
//         user: 'got here yay'
//     });
// });

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);



// router.get('/user/:userId', requireSignin, isAuth, read);
// router.put('/user/:userId', requireSignin, isAuth, update);
// router.get('/orders/by/user/:userId', requireSignin, isAuth, purchaseHistory);
//
// router.param('userId', userById);

module.exports = router;