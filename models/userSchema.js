const { type } = require("express/lib/response")
const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username:{ type:String,
    require: true
    },
email:{
    type:String,
},
password:{
    type:String,
    require:true,
},

})

const User = mongoose.model("user", userSchema);
module.exports=User;