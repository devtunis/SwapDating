
import fs from 'fs';
const testDate = (req,res,next) => {
 
  const data = new  Date()
 // console.log(data.getHours(),":",data.getMinutes(),data.getSeconds())
  
  fs.appendFile("./inforamtiondata/file.txt",` \n methode request : ${req.method} time request : ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} `, (err, data) => {
  if (err) {
    console.error("❌ Error reading file:", err);
  } else {
     console.log("sucess")
  }
});
   next();

   
};


export default testDate