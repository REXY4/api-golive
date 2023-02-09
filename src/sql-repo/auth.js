const { Users, Roles, userRole } = require("../../models");


 async function create (data){
    const result = await Users.create({
        ...data,
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
    const getRole = await Roles.findAll();
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
    return !result ? null : result.dataValues 
}

module.exports = {
    create,
    getBy
}