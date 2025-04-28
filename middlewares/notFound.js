const notFound = (req, res, next) => {
    // set status code to 404 and return error message
    res.status(404).json({
        success: false,
        error: '404 Not Found',
        message: 'Page not found'
    });
}

module.exports = notFound;