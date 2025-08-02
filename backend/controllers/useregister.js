import express  from "express"
import registerUser from "../Routes/registerUser.js";
import testDate from "../middlewares/testmidllware.js";



export default function(io){
const router = express.Router();
   
  router.post("/register",testDate,(req,res)=>registerUser(req,res,io))
  return router

}


 