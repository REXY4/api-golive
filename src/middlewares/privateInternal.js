const {api} = require("../services")

module.exports =async (req, res, next) =>{
    try{
        const role = req.role; 
        if(role === "user"){
         return  res.status(401).send({
                statusCode : 401,
                status : "failed",
                message : "Dont access"
            })
        }
        next()
    }catch(err){
        res.status(500).send({
            statusCode : 500,
            status : "failed",
            message : err.message
        })
    }
}