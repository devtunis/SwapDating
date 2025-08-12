 
import "./match.css"
const MatchTrue = ({close,makematch,Onpress} ) => {
  
  return (

       <div className="match-overlay" style={{display:close  && "none"}}>
      <div className="match-popup">
        <h1 className="match-title">💘 wanna  a Match!</h1>
        <p className="match-text">🔥 Something sexy just happened...</p>
        
        <button className="close-btn"  onClick={Onpress} >yes? </button>
        <button className="close-btn"  onClick={makematch} >no ? </button>
     
      </div>
    </div>  
          
  )
}

export default MatchTrue
