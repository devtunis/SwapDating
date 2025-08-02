import jwt from "jsonwebtoken"
import UserModel from "../model/UserModel.js";
const SECRET_KEY = "supersecretkey123";


const loginRoute = async (req,res)=>{
      const {email,password} = req.body

      if(!email  || !password){
       res.status(404).json({message :"fill the fildes"})
             return ; 
      }

     
  try{ 
      const auth = await UserModel.findOne({email:email,password:password})
     
      
        if(auth){
              const {_id,email,refrence,id} = auth
        const token = jwt.sign({_id,email,refrence,id}, SECRET_KEY, { expiresIn: "1h" });
              
         res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production (HTTPS)
            sameSite: "strict",
            maxAge: 3600000, // 1 hour
            })
           //io.emit("userConnectd",connected)
          res.status(200).json({message :"we know you",token:token,data: {_id,email,refrence,id}})
      }else{
            res.status(404).json({message: "we dont know you"})
      }


  }catch(error){
      console.log(error)
  }

    
      
     
}
export default loginRoute