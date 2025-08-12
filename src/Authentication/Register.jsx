import React, { useRef, useState } from 'react'
import axios from 'axios'
import "./root.css"
const Register = () => {

  const EmailRef = useRef()
  const PasswordRef = useRef()
  const Username = useRef();

   const [url,seturl] = useState("")
   const [loading,setloading] = useState(false)
   const [pic,setpic] = useState("")
   const [loadingregister,setlodaingregister] = useState(false)

  const Register = async ()=>{
    if(url==""){
      alert("no value")
      return ;
    }
     
    setlodaingregister(true)
     try{
       const  {data}    = await axios.post("http://localhost:3000/Authentication/register",{
    "username":Username.current.value,
    "email":Username.current.value,
    "password":PasswordRef.current.value,
    "img":url
},{withCredentials: true})

if(data){
  console.log("good",data)
  setlodaingregister(false)
}else{
  console.log("not good")
}
   }catch(error){ 
    setlodaingregister(false)
    console.log(error)
   }
  }
 


  const getimage  = async(e)=>{
    setloading(true)
      const file = e.target.files[0] 
      const create = URL.createObjectURL(file)
      setpic(create)
 
      const formdata = new FormData()
      formdata.append('file',file)
      formdata.append("upload_preset",'dating')

       try{

    const {data} = await axios.post(
        "https://api.cloudinary.com/v1_1/dfmdgsiid/upload",
        formdata
      );
        console.log(data.secure_url)
        seturl(data.secure_url)
        setloading(false)
        
      }
      catch(error){
        console.log(error)
        setloading(false)
      }

  }

  
  return (
    <> 
    <div className='auth'>

  {pic && <img src={pic} className="profile-pic" />}

  <label className="custom-file-upload">
    <input type="file" onChange={getimage} />
    📸 Upload Profile Picture
  </label>

  <input type='text' placeholder='Username' ref={Username} />
  <input type='text' placeholder='Email' ref={EmailRef} />
  <input type='password' placeholder='Password' ref={PasswordRef} />
  
  <select className="sexy-select">
    <option style={{color:"black"}} value="">Select Gender</option>
    <option   style={{color:"black"}} value="male">Male ♂️</option>
    <option   style={{color:"black"}} value="female">Female ♀️</option>
    <option   style={{color:"black"}} value="other">Other 🏳️‍🌈</option>
  </select>

  <input type='number' placeholder='Your Age' />

  <textarea placeholder="Write something about yourself... ✨" className="bio-input" />

  <select className="sexy-select">
    <option style={{color:"black"}} value="">Looking For</option>
    <option style={{color:"black"}} value="friendship">Friendship 🤝</option>
    <option style={{color:"black"}} value="dating">Dating 💘</option>
    <option style={{color:"black"}} value="longterm">Long-term ❤️</option>
  </select>

  <button onClick={Register}>
    {loadingregister ? <p>Loading</p> : <p>Register</p>}
  </button>

  {loading && <p>Wait, we’re uploading your hot pic 😎</p>}
</div>

    </>
  )
}

export default Register
