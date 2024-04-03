import React from 'react'
import apple from "../images/applePink.png";
import pinkcard from "../images/pink-card.png";
import blue from "../images/blue-card.png"
import back from "../images/back.png"
import combo from "../images/cards.png"
import play from "../images/play.png"
import banna2 from "../images/banana-2.png"
import { useNavigate } from 'react-router-dom';


const FourthPage = () => {
    const navigate = useNavigate();

  return (
    <div className='fistPageContainer'>
    <div className='bar'>
      <img src={banna2}></img>
    </div>
  <div className='box'>
      <div className='card'>
          <div className='number1'></div>                    
          <img src={pinkcard} alt='pink card' />
          <img src={apple} alt='apple card' className='apple'/>
          <h2>Select a pink card.</h2>
          <p>It has images.</p>
      </div>
      <div className='card'>
          <div className='number2'></div>
          <img src={blue} alt='blue card' />
          <h2>Select a blue card.</h2>
          <p>It has alphabets.</p>
      </div>
      <div className='card'>
          <div className='number3'></div>
          <img src={combo} alt='cards' style={{width:"15rem"}}/>
          <p >If they’re same</p>
          <h2 >Its a match !</h2>
          <p >otherwise retry :</p>
      </div>
  </div>
  <div className='bottom'></div>
  <button  onClick={()=>playSoundEffect("start")}>
      <img src={play} className='startgamebtn' alt='play button' onClick={() => navigate('/game')} />
  </button>
  <button className='backbtn' onClick={() => navigate('/next')}>
      <img src={back} alt='back button'/>
  </button>
</div>
  )
}

export default FourthPage