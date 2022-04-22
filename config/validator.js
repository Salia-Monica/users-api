const yup = require("yup")

function validate(data){
    const userSchema= yup.object().shape({
        username:yup.string() .required("Fill me").min(2).max(50),
        email:yup.string().require("Fill me").min(20).max(30),
        password:yup.string().require("Fill me").min(8).max(100)
    })
    return userSchema.validate(data)
}
module.exports = validate;