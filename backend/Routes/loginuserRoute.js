import jwt from "jsonwebtoken"
const SECRET_KEY = "supersecretkey123";


const loginRoute = (req,res)=>{
      const {email,password} = req.body
      if(!email  || !password){
       res.status(404).json({message :"fill the fildes"})
             return ; 
      }
      if(email=="fn@gmail.com" && password=="1"){
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
              
         res.cookie("token", token, {
            httpOnly: true,
            secure: false, // true in production (HTTPS)
            sameSite: "strict",
            maxAge: 3600000, // 1 hour
            })
           //io.emit("userConnectd",connected)
          res.status(200).json({message :"we know you",token:token})
      }
      
     
}
export default loginRoute