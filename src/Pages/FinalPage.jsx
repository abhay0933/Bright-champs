import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import banna2 from "../images/banana-2.png";
import back from "../images/back.png";
import top from "../images/topDesign.png";
import restart from "../images/restart.png";
import happymonkey from "../images/happyMonkey2.png";
import { Getctx } from "../context/Updatecount";

const FinalPage = () => {
    const navigate = useNavigate();
    let ctx  = Getctx();
  
    console.log(ctx);
  return (
    <div className="fistPageContainer">
    
    <div className="allBlack">

    <div className="remaining">
      <h1>Remaining</h1>
    <p style={{color:"#FFCF25"}} >❤️ {
        ctx.lifecount
        }</p>

    {/* <p style={{color:"#FFCF25"}}>
      🕰️ {ctx.timecount}
    </p> */}
    </div>
      <div className="bar">
        <img src={banna2} alt="banana" />
      </div>
      <div className="rewards">
        <img src={top} className="top" alt="top design" />
        <h1 className="earn">Earned</h1>
        <p className="points">{ctx.count} Banana's</p>
       
        <img src={happymonkey} className="happy" alt="happy monkey" />
        <img
          src={restart}
          className="restart"
          alt="restart button"
          onClick={() => {
            navigate("/");
        
          }}
        />
      </div>
      <button className="backbtn" onClick={() => navigate("/game")}>
        <img src={back} alt="back button" />
      </button>
    </div>
    
   
  </div>
  )
}

export default FinalPage