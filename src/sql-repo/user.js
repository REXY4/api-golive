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

async function getAll (){
    console.log("get all data")
    const result = await Users.findAll({
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
    return result.map((value)=>value.dataValues) 
}





module.exports = {
    update,
    getBy,
    getAll
}