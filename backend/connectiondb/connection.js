import mongoose from "mongoose"
export const connection = ()=>{
      mongoose.connect(process.env.MONGO_URI)
      .then(()=>{
          console.log("this databse connection")
      }).catch(err=>{
          console.error("this error was ",err)
      })
}