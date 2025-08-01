import React from 'react'
import { Outlet ,Link ,NavLink} from 'react-router-dom'
import "./root.css"
const RouteAuth = () => {
  return (
    <>  
    
         <div className='routeslink'>
         <NavLink to={"/auth"}  className={({ isActive }) =>isActive &&  "active" 
  }   >auth</NavLink>
         <NavLink to={"/register"}  className={({ isActive }) =>isActive &&  "active" 
  }>register</NavLink>
         </div>

        
 

     <Outlet/>
     </>
  )
}

export default RouteAuth
