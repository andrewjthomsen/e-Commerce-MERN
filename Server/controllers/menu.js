const Menu = require('../models/menu');
const {errorHandler} = require("../helpers/dbErrorHandler");

exports.create = (req, res) => {
    const menu = new Menu(req.body)
    menu.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({data});
    });
};