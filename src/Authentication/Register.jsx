import React, { useRef } from 'react'
import axios from 'axios'
import "./root.css"
const Register = () => {

  const EmailRef = useRef()
  const PasswordRef = useRef()
  const Username = useRef();
  const Regiser = async ()=>{
     try{
       const  {data}    = await axios.post("http://localhost:3000/Authentication/register",{
    "username":Username.current.value,
    "email":Username.current.value,
    "password":PasswordRef.current.value
},{withCredentials: true})

if(data){
  console.log("good",data)
}else{
  console.log("not good")
}
   }catch(error){ 
    console.log(error)
   }
  }
  return (
    <> 
      <div className='auth'>
      <input type='text' placeholder='Username' ref={Username}/>
      <input type='text'  placeholder='email' ref={EmailRef}/>
      <input type='text'  placeholder='password' ref={PasswordRef}/>
      <button onClick={()=>Regiser()}>register</button>
    </div>
    </>
  )
}

export default Register
