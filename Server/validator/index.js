// exports.userSignupValidator = (req, res, next) => {
//     req.check('name').not().isEmpty().withMessage('Name must have more than 5 characters'),
//         req.check('email')
//             .isEmail()
//             .withMessage('Must be a valid email address').matches(/.+\@.+\..+/).withMessage('Email must contain @').isLength({
//             min: 4,
//             max: 32
//         });
//     req.check('password', 'Password is required').notEmpty();
//     req.check('password').isLength({min: 6}).withMessage('Password must contain at least 6 characters').matches(/\d/)
//         .withMessage('Password must contain a number');
//     const errors = req.validationErrors();
//     if (errors) {
//         const firstError = errors.map(error => error.msg)[0];
//         return res.status(400).json({error: firstError});
//     }
//     // callback -- anytime a middleware is called a next needs to be called afterwards
//     next();
// };
exports.userSignupValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty();
    req
        .check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        });
    req.check('password', 'Password is required').notEmpty();
    req
        .check('password')
        .isLength({ min: 6 })
        .withMessage('Password must contain at least 6 characters')
        .matches(/\d/)
        .withMessage('Password must contain a number');
    const errors = req.validationErrors();
    if (errors) {
        const firstError = errors.map((error) => error.msg)[0];
        return res.status(400).json({ error: firstError });
    }
    next()
};