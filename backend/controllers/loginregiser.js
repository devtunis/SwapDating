import express  from "express"
 
import testDate from "../middlewares/testmidllware.js";
import verifyToken from "../middlewares/authMiddleware.js";
import loginRoute from "../Routes/loginuserRoute.js";
 
const router = express.Router();

router.post("/login",testDate,loginRoute)

export default router