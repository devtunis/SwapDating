import epxress  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {Server} from "socket.io"
import http from "http"
import useregister   from "./controllers/useregister.js"
import loginregiser  from "./controllers/loginregiser.js"
import   dotenv  from "dotenv"
import {connection} from "./connectiondb/connection.js"



dotenv.config();
connection();


const app =  epxress()

app.use(cors({
      origin:"http://localhost:5173",
       credentials: true
}))
app.use(epxress.json())
app.use(cookieParser())


const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin: ['http://localhost:5173','http://localhost:3000'],
        
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    }
});


 


app.get("/",(req,res)=>{
      res.send(["server  work"])
})

let connected = {} 
 


io.on("connection",(socket)=>{
    
       connected[socket.id] = socket.id
       console.log(connected)

      socket.on("disconnect", (reason) => {
      delete connected[socket.id]
      io.emit("userConnectd",connected)
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
})

 
// Authentication [login,register]
app.use("/Authentication",useregister(io,connected))
app.use("/Authentication",loginregiser)

















server.listen(process.env.PORT,()=>console.log("the server run....",process.env.PORT))