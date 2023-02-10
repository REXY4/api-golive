const { Users, Roles, userRole } = require("../../models");


 async function create (data){
    const result = await Users.create({
        ...data,
        status : "active",
        attributes : {
            exclude : ["id","password"]
        }
    });
    const createRole = await userRole.create({
        UserId : result.dataValues.id,
        RoleId : 2
    });
    const findRoles = await Roles.findOne({
        where : {id : createRole.dataValues.RoleId}
    })
    return {
        name : result.dataValues.name,
        email : result.dataValues.email,
        roles : findRoles.dataValues
    }
}

async function getBy (email){
    console.log("ini ligin",email)
    const result = await Users.findOne({
        where : {email : email},
        include : [{
            model  : Roles,
            as : "roles",
            through : {
                model : userRole,
                as : "userRole"
            }
        }]
    })
    const roles = await Roles.findAll();
    console.log(roles)
    return !result ? null : result.dataValues 
}

module.exports = {
    create,
    getBy
}