const mongoose=require("mongoose");
const user=new mongoose.Schema({
    id:{
        type:String,
        unique:true

    },
    name:{
        type:String,

    },
    email:{
        type:String,
        unique:true
    },
    phone:{
        type:String,
        unique:true
    },
    username:{
        type:String,
        unique:true

    },
    password:{
        type:String

    }

})
module.exports=mongoose.model("User",user)