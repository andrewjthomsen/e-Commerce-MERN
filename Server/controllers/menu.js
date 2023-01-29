// const Menu = require('../models/menu');
// const Pizza = require('../models/pizza');
// const {errorHandler} = require("../helpers/dbErrorHandler");
// let uuidv1 = require('uuidv1')
//
// console.log(uuidv1())
//
// exports.create = (req, res) => {
//     const menu = new Menu(req.body)
//     menu.save((err, data) => {
//         if (err) {
//             return res.status(400).json({
//                 error: errorHandler(err)
//             });
//         }
//         res.json({data});
//     });
// };