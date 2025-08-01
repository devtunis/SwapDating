import jwt from "jsonwebtoken"

const SECRET_KEY = "supersecretkey123"; 

const verifyToken =(req,res,next)=>{
  
  const token = req.cookies.token;
  if(!token){
    return res.status(403).json({msssage :"no token"})
  }else{
    try{ 
       const decoded = jwt.verify(token, SECRET_KEY);
 
       req.user = decoded
       next() 
    }catch(error){
      res.status(404).json({message :"the token not available"})
    }
  }
   

}

export default verifyToken;