import React, { useEffect, useState } from 'react'
import {io} from "socket.io-client"
const socket = io("http://localhost:3000/")

const Socksettest = () => {
      const [loopdataconnected,setloppconnected] = useState({})

      useEffect(()=>{
            socket.on("userConnectd",(peer)=>{
               
                  setloppconnected(peer)
            })
      },[socket])

     
  return (
    <div>
       {Object.entries(loopdataconnected).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
  )
}

export default Socksettest
