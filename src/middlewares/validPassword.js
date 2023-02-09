const bcrypt = require('bcrypt');

module.exports = async (req, res, next) =>{
     const isValidPassword = await bcrypt.compare(req.body.password, req.user.password);
    if (!isValidPassword) {
        return res.status(400).send({
          status: "failed",
          message: "password salah",
        });
      }
    next()  
}