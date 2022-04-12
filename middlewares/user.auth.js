
function auth(req, res, next) {
    let isVerifired = true;
    if (verifired) {
        console.log("Logged in successfully")
        next()
    } else {
        console.log("Not authorized")
        throw Error
    }
}

module.exports = auth