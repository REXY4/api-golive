const {auth:authControllers} = require("../controllers");
const { validation, checkUsers, generateToken, validPassword } = require("../middlewares");
const { schemaRegister } = require("../schemas/auth");

const defenition = {
    name: 'Auth Api',
    basePath : "/api/v1",
    description: 'Auth  APIs v1',
    routes : [
        {
            path : "/register",
            method : "post",
            action : [
                checkUsers,
                validation(schemaRegister,"body"),
                authControllers.create
            ]
        },
        {
            path : "/login",
            method : "post",
            action : [
                generateToken,
                validPassword,
                authControllers.login
            ]
        }

    ]
}

module.exports = defenition;