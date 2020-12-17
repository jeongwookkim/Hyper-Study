const mongoose = require('mongoose');

const {Schema}=mongoose;

const userSchema= new Schema({
    user_id:{
        type:String,
        required:true,
        unique:true
    },
    user_pw:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    }
});

module.exports=mongoose.model('user', userSchema);
