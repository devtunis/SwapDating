import epxress  from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import {Server} from "socket.io"
import http from "http"
import useregister   from "./controllers/useregister.js"
import loginregiser  from "./controllers/loginregiser.js"
import   dotenv  from "dotenv"
import {connection} from "./connectiondb/connection.js"
import chalk from "chalk";
 

dotenv.config();
connection() ;
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
        credentials: true
    }
});

 ;


app.get("/",(req,res)=>{
      res.send(["server  work"])
})

 

const connected = {}

 

io.on("connection",(socket)=>{
    
  
  console.log("New ID Conncted ["+chalk.magenta(chalk.green.bold(`${socket.id}`))+"]")

       socket.on("newuser",(o)=>{
        connected[o.sokcetid] = {email :o.email ,id:o.id,id0:o.id0,img:o.img}
        console.log(connected)
        io.emit("addPrettyuser",{socket :o.sokcetid,email : o.email,id:o.id,id0:o.id0,img:o.img}) // this send one 
     })
      
    
    
       socket.on("sendPrivateMessage", ({ to, msg }) => {
        console.log(`Private msg to ${to}: ${msg}`);
        io.to(to).emit("receivePrivateMessage", {
          from: socket.id,
          msg,
        });
      });

      socket.on("SendAsnwerMessage",({to,msg})=>{
         console.log(`Private msg to ${to}: ${msg}`);
        io.to(to).emit("receiveAnswerMessage",{
          from :socket.id,
          msg,
          
        })
      }) 


       
        
    socket.on("slm",(text)=>{
        console.log("login ...;")
        socket.emit("data",connected)
    })

      socket.on("disconnect", (reason) => {
        delete connected[socket.id]
        io.emit("delteuser",socket.id)  
    
      console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
 
})

 

 




// Authentication [login,register]
app.use("/Authentication",useregister(io))
app.use("/Authentication",loginregiser(io))










server.listen(process.env.PORT,()=>console.log("the server run....",process.env.PORT))