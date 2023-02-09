const checkAll = async (req, res) =>{
    try {
        res.send({
            statusCode : 200,
            message : "PING :ok",
        })
    } catch (error) {
        res.send({
            statusCode : 500,
            status : "error",
            message : error.message
        })
    }
}

module.exports = {  
    checkAll
}