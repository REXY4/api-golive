const {Users, Roles, userRole} = require("../../models");

async function update (data,id){
    const result = await Users.update(data,{
        where : {id : id}
    });
    return result
}

async function getBy (id){
    const result = await Users.findOne({
        where : {id : id},
        include : [{
            model  : Roles,
            as : "roles",
            through : {
                model : userRole,
                as : "userRoles"
            }
        }]
    })
    console.log(result)
    return !result ? null : result.dataValues 
}



module.exports = {
    update,
    getBy
}