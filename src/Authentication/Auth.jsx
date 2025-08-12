import React, { useRef, useState } from 'react'
import "./root.css"
import axios  from 'axios'
import socket from '../socket/socket'
 import { useNavigate } from "react-router-dom";
// presnet
const Auth = () => {
  const email =   useRef()
  const password =useRef()
  const [loading,setloading] = useState(false)
  const nav =useNavigate()
  const connect = async ()=>{
    setloading(true)
  try{
      const {data } =  await axios.post("http://localhost:3000/Authentication/login",{
        "email":email.current.value,
        "password":password.current.value
      },{withCredentials:true})
     
       if(data){
        console.log(data)
         socket.emit("newuser",{sokcetid:socket.id,email:data.data.email,id : data.data.id,id0 : data.data._id,img :data.data.img})   
         setloading(false)
         nav("/socket")
        }
     
  }    
  catch(error){
    setloading(false)
    console.log(error.message)
  }
    }

  return (
    <> 
   
    <div className='auth'>
      <input placeholder='email'  value={"n"}  ref={email} type='text'/>
      <input placeholder='password' value={1}  ref={password} type='text'/>
      {loading ? "wait" :<button onClick={()=>connect()} >auth</button>}
    </div>
     </>
  )
}

export default Auth
