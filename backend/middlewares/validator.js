const { body, validationResult } = require('express-validator');

const registerRules = () => [
    body ('name','Name is required').notEmpty(),
    body ('lastName','Last name is required').notEmpty(),
    body ('email','Email is required').isEmail(),
    body ('password','Password : length min 6 char').isLength({
        min : 6 , 
        max : 10
    }),
]

const loginRules = () => [
    body ('email','Email is required').isEmail(),
    body ('password','Password : length min 6 char').isLength({
        min : 6 , 
        max : 10
    }),
]

const validator = (req,res,next) => {
    const errors = validationResult (req) ;
    if (!errors.isEmpty) {
        return res.status(400).send({ errors:error.array().map((el)=> ({
            msg : el.msg
        }))
    })}
    next()
}

module.exports = {registerRules,loginRules,validator}