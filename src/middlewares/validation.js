module.exports = (joiSchema, key) => (req, res, next) => {
    try {
      const data = {
        ...Array.from(joiSchema._ids._byKey.keys()).reduce((a, v) => ({ ...a, [v]: req[key][v] }), {})
      };
      const {error} = joiSchema.validate(data)
      if (error) {
        return res.status(401).send({
         statusCode : "400",
         status : "failed",
         message  : error.details[0].message 
        })
      }
  
      return next()
    } catch (e) {
      return next(e)
    }
  }
  