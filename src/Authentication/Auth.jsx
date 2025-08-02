import React, { useRef } from 'react'
import "./root.css"
import axios  from 'axios'
import socket from '../socket/socket'
const Auth = () => {
  const email =   useRef()
  const password =useRef()
  const connect = async ()=>{
  try{
      const {data } =  await axios.post("http://localhost:3000/Authentication/login",{
        "email":email.current.value,
        "password":password.current.value
      },{withCredentials:true})
     
       if(data){
          socket.emit("c",{sokcetid:socket.id,email:data.data.email,id : data.data.id,id0 : data.data._id})   
       }
     
  }    
  catch(error){
    console.log(error.message)
  }
    }
  return (
    <div className='auth'>
      <input placeholder='email'   ref={email} type='text'/>
      <input placeholder='password'  ref={password} type='text'/>
      <button onClick={()=>connect()}>auth</button>
    </div>
  )
}

export default Auth
