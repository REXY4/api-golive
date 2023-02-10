const { api } = require("../services")

const update = async (req, res)=>{
    try {
        const id = req.id;
        const findUsers = await api.users.getBy(id);
        if(!findUsers){
          return  res.status(401).send({
                statusCode : 401,
                status : "failed",
                message : "users not found"
            })
        }
        const result = await api.users.update(req.body, id); 
        res.send({
            statusCode :200,
            message  :"update profile success",
            data : result
        })
    } catch (error) {
        res.status(500).send({
            statusCode : 500,
            status : "error",
            message : error.message
        })
    }
}

const updateStatus = async (req, res)=>{
    try {
        const id = req.params.id;
        const findUsers = await api.users.getBy(id);
        if(!findUsers){
          return  res.status(401).send({
                statusCode : 401,
                status : "failed",
                message : "users not found"
            })
        }
        const result = await api.users.update(req.body, id); 
        res.send({
            statusCode :200,
            message  :"update profile success",
            data : result
        })
    } catch (error) {
        res.status(500).send({
            statusCode : 500,
            status : "error",
            message : error.message
        })
    }
}

const getBy = async (req, res) =>{
    try {
        const findUsers = await api.users.getBy(req.params.id);
        if(!findUsers){
            return res.status(401).send({
                statusCode : 401,
                status : "failed",
                message : "Users not found!"
            })
        } 
        res.send({
            statusCode: 200,
            status: "success",
            message:"Get Users Sucess",
            data : findUsers
        })
    } catch (error) {
        res.status(500).send({
            statusCode : 500,
            status : "error",
            message : error.message
        })
    }
}

const getAll = async (req, res) =>{
    try {
        const findUsers = await api.users.getAll();
        if(!findUsers){
            return res.status(401).send({
                statusCode : 401,
                status : "failed",
                message : "Users not found!"
            })
        } 
        res.send({
            statusCode: 200,
            status: "success",
            message:"Get All Users Sucess",
            data : findUsers
        })
    } catch (error) {
        res.status(500).send({
            statusCode : 500,
            status : "error",
            message : error.message
        })
    }
}


module.exports = {
    update,
    getBy,
    getAll,
    updateStatus
}