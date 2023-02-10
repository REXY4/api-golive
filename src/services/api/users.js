
const {users}=require("../../sql-repo");

const update = async (data,id) =>{
    const result = await users.update(data,id);
    return result
}

const getBy = async (id)=>{
    const result = await users.getBy(id);
    return result
}

const getAll = async ()=>{
    const result = await users.getAll();
    return result
}



module.exports = {
    update,
    getBy,
    getAll
}