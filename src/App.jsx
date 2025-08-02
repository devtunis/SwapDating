import { useRef, useState } from 'react';
import './App.css';
import { swapfunctionnormal } from './StoreTenderFunction.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import { pagination } from './StoreTenderFunction.js';
import { Route,  Routes as Router} from 'react-router-dom';
import RouteAuth from './Authentication/RouteAuth.jsx';
import Auth from './Authentication/Auth.jsx';
import Register from './Authentication/Register.jsx';
import Socksettest from './Socksettest.jsx';
const App = () => {

  
  const [db, setdb] = useState([
  {
    id: 0,
    color: "#FF6B6B", // rose red
    name: "Ghaith",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    id: 1,
    color: "#FF9F1C", // vibrant orange
    name: "Fedi",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    id: 2,
    color: "#4ECDC4", // minty teal
    name: "Ameni",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    id: 3,
    color: "#6A4C93", // royal purple
    name: "Nesserine",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
  },
  {
    id: 4,
    color: "#FF5E5B", // coral red
    name: "Doua",
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    id: 5,
    color: "#F7B32B", // soft gold
    name: "Mohamed",
    img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
  },
  {
    id: 6,
    color: "#3FA7D6", // ocean blue
    name: "Ahmed",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
  },
  {
    id: 7,
    color: "#FF4E50", // watermelon
    name: "Aymen",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
  },
  {
    id: 8,
    color: "#9D65C9", // lavender purple
    name: "Sarah",
    img: "https://images.pexels.com/photos/1130624/pexels-photo-1130624.jpeg"
  },
  {
    id: 9,
    color: "#F67280", // rose pink
    name: "Mouna",
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
]);


  const cardRefs = useRef([]); // array of refs

  const [lengthofarray, setlengthofarray] = useState(db.length - 1);


  const [loadingmatching,setloadingmatching] = useState(false)
  const [loadingmatching2,setloadingmatching2] = useState(false)

  const TranslateCardAndDoEffect = (user, index) => {
     setloadingmatching2(true)

         setTimeout(()=>{



    const currentCard = cardRefs.current[index];
    if (currentCard) {
      currentCard.classList.add('moveleft');
      setTimeout(() => {
        setdb(swapfunctionnormal(db, user));
        
      }, 600);
    }
setloadingmatching2(false)


         },600)
  };


  const match =  (user,index) =>{
  
    setloadingmatching(true)
    
   setTimeout(() => {
       const currentcard = cardRefs.current[index]
        if(currentcard){
      currentcard.classList.add('rightmovematch');
    setTimeout(() => {
          setdb(swapfunctionnormal(db, user));
          
      }, 600); 
      }setloadingmatching(false)
   }, 600);
  }



  return (
    <>
     
 <Router>
  <Route path="/home" element={<>  <div className='mainTender'>
        {db.length !== 0 ? (
          db.map((user, index) => (
            <div
              key={user.id}
              className='ParentTender'
              ref={(el) => (cardRefs.current[index]= el)}
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                backgroundColor: user.color,
                zIndex: user.id,
                rotate: `${user.id * -1.4}deg`
              }}
            >
              {   <div className={loadingmatching ?  "on" :"off" }>
                <h2>LIKE</h2>
              </div>}

         {   <div className={loadingmatching2 ?  "on1" :"off1" }>
                <h2>Rejected</h2>
              </div>}


              <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><img src={user.img} alt="slide" style={{ width: "100%", height: "100%", borderRadius: "10px" }} /></SwiperSlide>
                <SwiperSlide><img src={user.img} alt="slide" style={{ width: "100%", height: "100%", borderRadius: "10px" }} /></SwiperSlide>
                <SwiperSlide><img src={user.img} alt="slide" style={{ width: "100%", height: "100%", borderRadius: "10px" }} /></SwiperSlide>
          
              </Swiper>

              <div className='clientInfo'>
                <div className="firstinfo">
                  <div className="title"><h2 >{user.name}</h2> </div>
                  <div className="age">20</div>
                  <div className='verifyed'><img src='./verified.png' alt="verified" /></div>
                </div>
                <div className='location'>
                  <div><img src='./location.png' alt="location" /></div>
                  <div>1km away</div>
                </div>
              </div>

              <div className='optionMatching'>
                <div className='custom'><img src='./copimages/rotate.png' alt="rotate" /></div>
                { loadingmatching ?  <div className='custom'   ><img src='./copimages/close.png' alt="close" /></div>  :  <div className='custom' onClick={()=>TranslateCardAndDoEffect(user, index) }  ><img src='./copimages/close.png' alt="close" /></div>}
                <div className='custom'><img src='./copimages/star.png' alt="star" /></div>
               {loadingmatching ?   <div className='custom' ><img src='./copimages/heart.png' alt="heart" /></div>    :    <div className='custom' onClick={() => match(user,index)}><img src='./copimages/heart.png' alt="heart" /></div>  }
                <div className='custom'><img src='./copimages/flash.png' alt="flash" /></div>
              </div>
            </div>
          ))
        ) : (
          <p style={{color:"white",fontWeight:"bold",fontSize:"30px"}}>We didn't find any matches for you.</p>
        )}
      </div> </>  }/>
      

     <Route path='/' element={<><RouteAuth/></>} >
     <Route index element={<Auth />} />
     <Route path="/auth" element={<Auth />} />
     <Route path="/register" element={<Register/> } />
    </Route>


   <Route path='/socket' element={<Socksettest/>}/>
 </Router>

    </>
  );
};

export default App;
