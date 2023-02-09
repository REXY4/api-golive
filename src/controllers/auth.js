const { api } = require("../services")

const create = async (req, res) => {
    try{
        const result = await api.auth.create(req.body);
        res.send({
            statusCode : 200,
            status : "success",
            message : "create data users success",
            data : result
        })
    }catch(err){
        res.send({
            statusCode : 500,
            message  : err.message
        })
    }
}

const login = async (req, res)=>{
    try{
        const result = await api.auth.login(req.body.email);
        res.send({
            statusCode : 200,
            status : "success",
            message : "Login success",
            data : {
                user : result,
                token : req.token
            }
        })
    }catch(err){
        res.send({
            statusCode : 500,
            message  : err.message
        })
    }
}

module.exports = {
    create,
    login
}