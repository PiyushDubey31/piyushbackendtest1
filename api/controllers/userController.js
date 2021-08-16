const User=require("../models/user")
module.exports={
    CreateUser:async (req,res)=>{
        const {id,name,email,phone,username,password}=req.body;
       
        try {

            const response=await new User({
                id:id,
                name:name,
                email:email,
                phone:phone,
                username:username,
                password:password
            })
            response.save((err,result)=>{
                if(err){
                    res.json({"message":"user data could not saved",err:err.name})
                }
                if(result && result!=null){
                    res.json({"message":"user data saved successfully",result})
                }
            })
            

        } catch (error) {
            res.json({"message":"catch error occured",error})
            
        }

    },
getUser:async(req,res)=>{
    try {
        const response=await User.find({});
        res.json({"message":"response crested successfully",response})
        
    } catch (error) {
        res.json({"message":"catch eror",error})
        
    }

},
searchUserData:async (req,res)=>{
    const {username}=req.body;
    try {

        const response=await User.find({username:{ $regex: username}},{$projection:{"_id":1,"username":1}});
        if( response && response!=null){
            res.json({"message":"user found  successfuly",response})

        }
        

        
    } catch (error) {
        
    }
}


}