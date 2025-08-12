import { useEffect, useState } from "react";
import socket from "./socket/socket";
import "./sockt.css"
import Match from "./MatchingCompoenent/MatchTrue"
const Socksettest = () => {
  const [users, setUsers] = useState({});
  const [mathstate,setmatchsate] = useState(true)
  const [AuthorResponse,SetAuthorResponse] = useState()
  
 
 useEffect(()=>{
  const fn = (y) => {
 
    setUsers((prev) => ({
    ...prev,
    [y.socket]: y
  }));
  }
  socket.on("addPrettyuser",fn)
  
  return()=>{
    socket.off("addPrettyuser",fn)
  }
 },[])

 useEffect(()=>{
   const DelteAuhtors = (y)=>{
    console.log(y,"done")
    setUsers((prev)=>{
      const newUsers = {...prev}
      delete newUsers[y];  
      return newUsers
      
    })
   }
  socket.on("delteuser",DelteAuhtors)
  return()=>{
    socket.off("delteuser",DelteAuhtors)
  }
 },[])



useEffect(()=>{
  socket.emit("slm","this message from frontend ")
  socket.on("data",(delta)=>setUsers(delta))
},[])

useEffect(()=>{
  console.log(users)
},[users])

useEffect(()=>{
  console.log(socket.id)
},[])




 const sendPrivate = (targetSocketId, message) => {
  socket.emit("sendPrivateMessage", {
    to: targetSocketId,
    msg: message,
  });
};
 



  useEffect(() => {
  socket.on("receivePrivateMessage", ({ from, msg }) => {
    console.log(`📩 From ${from}: ${msg} and socket  ${socket.id}`);
    SetAuthorResponse(from)
    setmatchsate(false)
   
 
  });

  return () => {
    socket.off("receivePrivateMessage");
  };
}, []);









 const SendAnswerResponse = (targetSocketId, message) => {
  socket.emit("SendAsnwerMessage", {
    to: targetSocketId,
    msg: message,
  });
};



useEffect(()=>{

socket.on("receiveAnswerMessage",({from,msg,fire})=>{
   console.log(`you have  got so message  ${from}: ==== ${msg}  `);
})

return()=>{
  socket.off("receiveAnswerMessage")
}
  
},[])


 const  HandelOnpPress   =  () =>{
  console.log("..... login .....")
  console.log(`my socket it ${socket.id} author id i wanna match with you ${AuthorResponse} `)
  SendAnswerResponse(AuthorResponse,`Hello i wanna match with you look sexy`)

 }
 
 
  return (
    <>  
    <p style={{color:"green"}}>My socket id {socket.id}</p>

   <Match close={mathstate} makematch = {()=>setmatchsate(true)} Onpress = {HandelOnpPress} />
    <div>
           <h3>Connected Users {Object.entries(users).length}:</h3>


           
      { Object.entries(users).length===0 ? "no user here check it later" : Object.entries(users).map(([socketId, user], i) => (
      socket.id!=socketId && 
        <div key={socketId} onClick={()=>sendPrivate(socketId, "💌 Hello from Gaith!")}>
          <p style={{color:"red"}}>🔑 Socket ID: {socketId}</p>
          <p>📧 Email: {user.email}</p>
          <p>🆔 ID: {user.id}</p>
          <p>🪪 ID0: {user.id0}</p>
          <img src={user.img} style={{widows:"100px",height:"100px",borderRadius:"20px"}}/>
          <hr />
        </div>
      ))}
      
   
    </div>
     </>
  );
};

export default Socksettest;
// task tomrow just send one people


// const removeUser = (socketId) => {
//   setUsers((prev) => {
//     const newUsers = { ...prev };  // clone the object
//     delete newUsers[socketId];     // delete the key
//     return newUsers;
//   });
// }; handel to remove socket io
