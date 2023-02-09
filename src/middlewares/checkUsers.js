const {api} = require("../services")

module.exports =async (req, res, next) =>{
    try{
        const checkUsers = await api.auth.getBy(req.body.email); 
        if(checkUsers){
         return  res.status(401).send({
                statusCode : 401,
                status : "failed",
                message : "email and password already exist"
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