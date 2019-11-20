
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const jwtKEY =require('../config/keys').JWT_KEY;

const auth = async(req, res, next) => {
    console.log(req.header)

    const token = req.header('Authorization').replace('Bearer ', '')
    const data = jwt.verify(token, jwtKEY)
    try {
        console.log('is loged', data)
        const user = await User.findOne({ _id: data._id, 'tokens.token': token })
        if (!user) {
            throw new Error()
        }
        req.user = user
        req.token = token
        next()
    } catch (error) {
        res.status(401).send({ error: 'Not authorized to access this resource' })
    }

}
module.exports = auth