const {check}=require('express-validator');
exports.signupValidatores=[
    check('name')
    .not()
    .isEmpty()
    .withMessage("Name is required"),
    check('email')
    .isEmail()
    .withMessage("enter a valid email"),
    check('password')
    .isLength({min:6})
    .withMessage("password must be 6 chracter long")
]
exports.signinValidatores=[
    check('email')
    .isEmail()
    .withMessage("Enter A Valid Email"),
    check('password')
    .isLength({min:6})
    .withMessage("Password Must Be 6 Chracter Long")
]