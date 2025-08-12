import jwt from "jsonwebtoken"
import UserModel from "../model/UserModel.js";
const SECRET_KEY = "supersecretkey123";


const loginRoute = async (req,res,io)=>{
      const {email,password} = req.body

      if(!email  || !password){
       res.status(404).json({message :"fill the fildes"})
             return ; 
      }

     
  try{ 
      const auth = await UserModel.findOne({email:email,password:password})
    // console.log(auth,"<==")
      
        if(auth){
              const {_id,email,refrence,id,img} = auth
        const token = jwt.sign({_id,email,refrence,id}, SECRET_KEY, { expiresIn: "1h" });
              
         res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production (HTTPS)
            sameSite: "strict",
            maxAge: 3600000, // 1 hour
            })
            
         //  io.emit("fromheaven",{_id:id,email:email,refrence:refrence,id:id}) // can i here send my id sockt io? ???????
          res.status(200).json({message :"we know you",token:token,data: {_id,email,refrence,id,img}})
      }else{
            res.status(203).json({message: "we dont know you"})
      }


  }catch(error){
      console.log(error)
  }

    
      
     
}
export default loginRoute