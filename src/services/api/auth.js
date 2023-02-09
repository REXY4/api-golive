const {auth,Roles, userRole} =require("../../sql-repo");
const bcrypt = require("bcrypt");

const create = async (data) =>{
    const passwordStrength = 10;
    const passwordHashed = await bcrypt.hash(data.password, passwordStrength);
    const body = {
        name : data.name,
        email : data.email,
        password : passwordHashed
    }
    
    const result = await auth.create(body);
    return result
}

const getBy = async (email) =>{
    const result = await auth.getBy(email);
    return result
}

const login = async (email)=>{
    const result = await auth.getBy(email);
    return result
}

module.exports = {
    create,
    getBy,
    login
}

