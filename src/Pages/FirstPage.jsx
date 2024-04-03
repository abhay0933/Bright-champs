import React from 'react';
import happymonkey from "../images/happyMonkey.png";
import startbtn from "../images/start.png";
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
    const navigate = useNavigate();
  return (
    <div className='fistPageContainer'>
        <img src={happymonkey} className='monkey'/>
        <div className="text smallborder">
        <h1>Welcome Kiddo!</h1>
        <button className='startbtn' onClick={()=> navigate('/start')}>
            <img src={startbtn} />
        </button>
      </div>
    </div>
  )
}

export default FirstPage;