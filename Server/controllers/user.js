const User = require('../models/user');
// const jwt = require('jsonwebtoken');
// const expressJwt = require('express-jwt');
// const {errorHandler} = require('../helpers/dbErrorHandler');

//Middleware
exports.userById = (req, res,next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        }
        req.profile = user;
        next();
    });
};
// exports.signup = (req, res) => {
//     console.log("req.body", req.body);
//     const user = new User(req.body);
//     user.save((err, user) => {
//         if (err) {
//             return res.status(400).json({
//                 err: errorHandler(err)
//             });
//         }
//         user.salt = undefined;
//         user.hashed_password = undefined;
//         res.json({
//             user
//         })
//     });
//
// };
//
// exports.signin = (req, res) => {
//     // find user based on email
//     const {email, password} = req.body
//     User.findOne({email}, (err, user) => {
//         if (err || !user) {
//             return res.status(400).json({
//                 err: "User with that email does not exist."
//             });
//         }
//         // if user is found make sure the email and password match
//         // create authenticate method in user model
//         if (!user.authenticate(password)) {
//             return res.status(401).json({
//                 error: "Email and password do not match"
//             })
//         }
//         // generate a signed token with user id and secret
//         const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
//         // persist the token as "t" in cookie with expiry date
//         res.cookie('t', token, {expire: new Date() + 9999})
//         // return response with user and token to frontend client
//         const {_id, name, email, role} = user
//         return res.json({token, user: {_id, email, name, role}});
//     });
// };
//
// exports.signout = (req, res) => {
//     res.clearCookie('t');
//     res.json({ message: 'User Successfully Signed Out' });
// };
//
// exports.requireSignin = expressJwt({
//     secret: process.env.JWT_SECRET,
//     algorithms: ["HS256"],
//     userProperty: "auth",});