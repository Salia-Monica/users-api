function auth(req, res, next) {
    let isVerifired = true;
    if (isVerifired) {
        console.log("Logged in successfully")
        next()
    } else {
        console.log("Not authorized")
        throw Error
    }
}

module.exports = auth;