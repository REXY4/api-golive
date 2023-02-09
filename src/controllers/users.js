const { api } = require("../services")

const update = async (req, res)=>{
    try {
        const findUsers = await api.users.getBy(req.id);
        console.log("nama users", findUsers)
        if(!findUsers){
          return  res.status(401).send({
                statusCode : 401,
                status : "failed",
                message : "users not found"
            })
        }
        const  {posision,name,ktp,placeAndBrith,gender,religion,status,idCardAddress,address,noTelp} = req.body;
        const result = await api.users.update({posision,name,ktp,placeAndBrith,gender,religion,status,idCardAddress,address,noTelp}, req.id); 
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

const getBy = async () =>{
    try {
        const findUsers = await api.users.getBy(req.id);
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


module.exports = {
    update,
    getBy
}