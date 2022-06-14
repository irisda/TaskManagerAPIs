const errorHandlerMiddleware = (err, req, res, next) =>{
    return res.status(500).json({ msg: `Somthing went wrong! Try again late!`})
}

module.exports = errorHandlerMiddleware;
