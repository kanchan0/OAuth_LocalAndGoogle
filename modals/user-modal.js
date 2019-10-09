const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema=new Schema({

    username:String,
    googleId:String,
    thumbnail:String
});

const userSchema_Normal_Signup = new Schema({
  email:String,
  password:String  
})
const User = mongoose.model('user',userSchema)
const Normal_User=mongoose.model('normal_user',userSchema_Normal_Signup)
module.exports={User,Normal_User};