const errorsHandler = (err, req, res, next) => {
    // set status code to 500 and return error message
    res.status(500).json({
        success: false,
        error: '500 Internal Server Error',
        message: err.message
    });
}

module.exports = errorsHandler;