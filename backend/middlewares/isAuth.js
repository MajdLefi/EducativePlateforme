//req json web token
const jwt = require('jsonwebtoken')

//req User
const User = require('../models/User')

const isAuth = async (req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        //check token 
        if (!token) {
            return res.status(401).send({ msg: 'No token, authorization denied' })

        }

        const decoded = await jwt.verify(token, process.env.secretOrkey)

        //Add user from payload
        const user = await User.findById(decoded.id)

        //Check for user
        if (!user) {
            return res.status(401).send({ msg: 'authorization denied' })
        }

        //Create user
        req.user = user;
        next()

    } catch (error) {
        return res.status(400).json({ msg: 'token not valid!' })
    }
}

module.exports = isAuth;