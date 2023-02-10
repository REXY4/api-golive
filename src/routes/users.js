const {users} = require("../controllers");
const {auth, validation, privateInternal} = require("../middlewares");
const {users : schema} = require("../schemas");

const defenition = {
    name: 'Users Api',
    basePath : "/api/v1/user",
    description: 'Users  APIs v1',
    routes : [
        {
            path : "/update",
            method : "put",
            action : [
                auth,
                // validation(schema.schemaBody, "body"),
                users.update
            ]
        },
        {
            path : "/update/:id",
            method : "put",
            action : [
                auth,
                // validation(schema.schemaBody, "body"),
                users.updateStatus
            ]
        },
        {
            path : "/:id",
            method : "get",
            action : [
                auth,
                users.getBy
            ]
        },
        {
            path : "/",
            method : "get",
            action : [
                auth,
                privateInternal,
                users.getAll
            ]
        }

    ]
}

module.exports = defenition;