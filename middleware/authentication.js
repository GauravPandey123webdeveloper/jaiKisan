const jwt = require('jsonwebtoken')
const blogModel = require('../models/cardModel')
const userModel = require('../models/customerModel')
// checking authentication
const authentication = async function (req, res, next) {
    try {
        let token = req.headers['x-api-key'];
        if (!token) {
            res.status(401).send({ status: false, message: "token must be present " });
        } else {
            const decodedToken = jwt.verify(token, 'jaikisan')
            if (!decodedToken) {
                res.status(401).send({ status: false, message: "verification failded" })
            } else {
                req.decodedToken = decodedToken
                next()
            }
        }
    } catch (err) {
        res.status(401).send({ status: false, message: "Authentication failed" })
    }
}
// checking the authorisation by authorid
const authorisation = async function (req, res, next) {
    try {
        const id = req.params.customerId    
        const decId = req.decodedToken.customerId
       
            if (id == decId) {
                next()
            } else {
                res.status(403).send({ status: false, message: " You are not authorised " })
            }
       
    }
    catch (err) {
        res.status(400).send({ status: false, message: "Invalid customer id" })
    }
}
module.exports = { authentication, authorisation }