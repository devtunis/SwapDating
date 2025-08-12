import mongoose from "mongoose"
import chalk from "chalk";
 
export const connection = ()=>{
      mongoose.connect(process.env.MONGO_URI)
      .then(()=>{
          console.log(
        chalk.magenta(chalk.bgRedBright.bold("✅ Database connected successfully! 🚀🔥")))
      }).catch(err=>{
          console.error("this error was ",err)
      })
} // should be do return here ?