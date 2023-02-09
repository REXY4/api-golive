const jwt = require("jsonwebtoken");
const {api} = require("../services")


module.exports = async (req, res, next) =>{
    const checkUsers = await api.auth.getBy(req.body.email);
    if(!checkUsers){
        return  res.status(401).send({
            statusCode : 401,
            status : "failed",
            message : "login failed"
        })
    }  
    const secretKey = process.env.SECRET_KEY;
    const token =  jwt.sign({user : checkUsers}, secretKey);
    req.user = checkUsers
    req.token = token
    next();
}