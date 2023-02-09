const joi = require('joi');

const schemaRegister = joi.object({
    email : joi.string().email().trim().required(),
    name : joi.string().required(),
    password: joi.string().required()
})

const schemaLogin = joi.object({
    email : joi.string().email().trim().required(),
    password: joi.string().required()
})

module.exports = {
    schemaRegister,
    schemaLogin
}
