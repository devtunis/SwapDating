import React, { useRef } from 'react'
import "./root.css"
import axios  from 'axios'
const Auth = () => {
  const email =   useRef()
  const password =useRef()
  const connect = async ()=>{
  try{
      const {data } =  await axios.post("http://localhost:3000/Authentication/login",{
        "email":email.current.value,
        "password":password.current.value
      },{withCredentials:true})
      console.log(data)
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
