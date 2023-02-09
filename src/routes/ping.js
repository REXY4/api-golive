const {ping} = require("../controllers");

const defenition = {
    name: 'Ping Api',
    basePath : "/api/v1",
    description: 'Ping  APIs v1',
    routes : [
        {
            path : "/ping",
            method : "get",
            action : [
                ping.checkAll
            ]
        }

    ]
}

module.exports = defenition;