export const swapfunctionPremuim =(lengthofarray,db,setdb,setlengthofarray)=>{
    
    

    if(lengthofarray>0){
  
    let aux = db[lengthofarray-1].id

    db[lengthofarray-1].id =db[lengthofarray].id
    db[lengthofarray].id = aux
    let copy =[...db]
 
     setlengthofarray((prev)=>prev-1)
     setdb(copy)
    }
   
    
  }


  export const  swapfunctionnormal = (db,user)=>{

          const filterUsers  = db.filter((item)=>item.id !=user.id)
          return filterUsers
         


  }


    export const     pagination = {
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    };
  
  