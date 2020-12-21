const mongoose = require("mongoose");
//const { ObjectID } = require('mongodb');
const Schema= mongoose.Schema;
const userSchema = new Schema({
  name:String,
  mobile: Number,
  email: String,
  password:String,
  ProfilePicture: String
    //"https://pbs.twimg.com/profile_images/649141003098591232/fDyZO4pb_400x400.png"
});
module.exports = mongoose.model('User', userSchema);  

