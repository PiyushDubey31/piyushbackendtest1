const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
// const body_parser=require("body-parser");
const { CreateUser, getUser } = require("./api/controllers/userController");
const PORT=process.env.PORT || 3000;
const app=express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.json({"message":"welcome piyush to your badckend"})
});
app.post("/post/userData",CreateUser
   
);
app.get("/get/userData",getUser)
mongoose.connect( 
    "mongodb+srv://PiyushDubey31:piyushdubey0341@piyushbackendtest1.khg11.mongodb.net/piyushbackendtestdatabase?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true},
(err,result)=>{
    if(err){
        console.log("database could not connected")
    }
    if(result){
        console.log("database connected successfully")
    }
}
    )
app.listen(PORT,()=>{
    console.log(`your server has been started at port number ${PORT}`);
})