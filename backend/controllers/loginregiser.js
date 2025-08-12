import express  from "express"
 
import testDate from "../middlewares/testmidllware.js";

import loginRoute from "../Routes/loginuserRoute.js";
 
export default function(io){
const router = express.Router();

router.post("/login",testDate,(req,res)=>loginRoute(req,res,io))
return router
}
 