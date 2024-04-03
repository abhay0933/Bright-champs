import React from 'react'
import happymonkey from "../images/happyMonkey.png";
import nextbtn from "../images/next.png";
import backbtn from "../images/back.png"
import { useNavigate } from 'react-router-dom';


const SecondPage = () => {
    const navigate = useNavigate();
    return (
        <div className='fistPageContainer'>
            <button className='backbtn' onClick={()=> navigate('/')}>
              <img src={backbtn} />
            </button>
            <img src={happymonkey} className='monkey'/>
            <div className="text smallborder">
            <h1>I am Mizo! <br />
                and I love bananas 🍌</h1>
            <button onClick={() => navigate('/next')}>
                <img src={nextbtn} className='startbtn'/>
            </button>
          </div>
        </div>
      )
}

export default SecondPage