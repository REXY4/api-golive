const {users} = require("../controllers");
const {auth, validation} = require("../middlewares");
const {users : schema} = require("../schemas");

const defenition = {
    name: 'Users Api',
    basePath : "/api/v1",
    description: 'Users  APIs v1',
    routes : [
        {
            path : "/update",
            method : "put",
            action : [
                auth,
                validation(schema.schemaBody, "body"),
                users.update
            ]
        },
        {
            path : "/users",
            method : "put",
            action : [
                auth,
                users.getBy
            ]
        }

    ]
}

module.exports = defenition;