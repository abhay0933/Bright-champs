import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logic from "../Components/Logic";
import apple from "../images/apple-card.png";
import a from "../images/a-card.png";
import c from "../images/c-card.png";
import g from "../images/g-card.png";
import l from "../images/l-card.png";
import o from "../images/o-card.png";
import w from "../images/w-card.png";
import orange from "../images/orange-card.png";
import watermelon from "../images/watermelon.png";
import lemon from "../images/lemon.png";
import graphes from "../images/grapes.png";
import cherries from "../images/cherries.png";
import back from "../images/back.png";
import banna2 from "../images/banana-2.png";
import { Getctx } from "../context/Updatecount";

const pCards = [
  { src: apple, matched: false, type: "pink", id: 1 },
  { src: cherries, matched: false, type: "pink", id: 2 },
  { src: graphes, matched: false, type: "pink", id: 3 },
  { src: lemon, matched: false, type: "pink", id: 4 },
  { src: orange, matched: false, type: "pink", id: 5 },
  { src: watermelon, matched: false, type: "pink", id: 6 },
];

const bCards = [
  { src: a, matched: false, type: "blue", id: 1 },
  { src: c, matched: false, type: "blue", id: 2 },
  { src: g, matched: false, type: "blue", id: 3 },
  { src: l, matched: false, type: "blue", id: 4 },
  { src: o, matched: false, type: "blue", id: 5 },
  { src: w, matched: false, type: "blue", id: 6 },
];

const PlayGame = () => {

  const [pinkCards, setPinkCards] = useState([]);
  const [blueCards, setBlueCards] = useState([]);
  const [pinkSelected, setpinkSelected] = useState(null);
  const [blueSelected, setblueSelected] = useState(null);
  const [Progressbar, setProgressbar] = useState(0);
  const [timer, setTimer] = useState(30);
  let [life, setLife] = useState(5);
  const [countBanana, setCountBanana] = useState(0);
  const overlayRef = useRef(null);

  const navigate = useNavigate();

  const ctx=Getctx();

  const shufflePinkCards = () => {
    const shuffledPinkCards = [...pCards].sort(() => Math.random() - 0.5);
    setPinkCards(shuffledPinkCards);
  };

  const shuffleBlueCards = () => {
    const shuffledBlueCards = [...bCards].sort(() => Math.random() - 0.5);
    setBlueCards(shuffledBlueCards);
  };

  const handleChoice = (card) => {
    if (card.type === "pink" && pinkSelected === null) {
      setpinkSelected(card);
    }
    if (card.type === "blue" && pinkSelected !== null &&  blueSelected === null) {
      setblueSelected(card);
    }
  };

  const resetTurn = () => {
    setpinkSelected(null);
    setblueSelected(null);
  };

  const goToFinal = () => {
      // ctx.setCount(countBanana);
      ctx.setlifecount(life);
      // ctx.settimecount(timer);
      setTimeout(() => {
      navigate("/final");
    }, 1000);
  };

  // useEffect(() => {
  //   if (timer === 0) {
  //     goToFinal();
  //     return;
  //   }

  //   const timerId = setTimeout(() => {
  //     setTimer(timer - 1);
  //   }, 1000);

  //   return () => clearTimeout(timerId); // Cleanup function to clear timeout
  // }, [timer]);

  useEffect(() => {
    if (pinkSelected && blueSelected) {
      if (pinkSelected.id === blueSelected.id) {
        // playSoundEffect("match");
        setCountBanana(countBanana + 1);
        setPinkCards((prev) => {
          return prev.map((card) => {
            if (card.id === pinkSelected.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setBlueCards((prev) => {
          return prev.map((card) => {
            if (card.id === blueSelected.id) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        setProgressbar((prev) => {
          if (prev + 16.7 >= 100) goToFinal();
          return prev + 16.7;
        });

        overlayRef.current.style.display = "flex";
        setTimeout(() => {
          resetTurn();
        }, 1500);
      } else {

        life=life-1;
        
        // playSoundEffect("cancel")
        if (life === 0) {
          goToFinal();
          return;
        } 
        setLife(life);
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [pinkSelected, blueSelected]);

  useEffect(() => {
    shufflePinkCards();
    shuffleBlueCards();
    setProgressbar(0);
  }, []);
  return (
    <div className="fistPageContainer">
     
 {/* {countBanana} */}
      {/* <h2 className="timer">Time Remaining: {timer}s</h2> */}

      <h1 className="life">
        ❤️ <span className="cross">❌</span>
        <h4 id="countlife" style={{color: "#E81224"}}>{life}</h4>
      </h1>
      {pinkSelected && blueSelected && (
        <div className="overlay" ref={overlayRef}>
          <h1>It’s a match !</h1>
          <div style={{ transform: "rotate(-10deg)" }}>
            <img
              src={pinkSelected.src}
              alt="apple card"
              style={{ width: "10rem" }}
            />
          </div>
          <div style={{ transform: "rotate(10deg)" }}>
            <img
              src={blueSelected.src}
              alt="apple card"
              style={{ width: "10rem" }}
            />
          </div>
        </div>
      )}

      <div className="cards-container">
        <div className="bar">
          <div
            style={{
              height: "100%",
              width: `${Progressbar}%`,
              background:
                "linear-gradient(0deg, #FFCF25, #FFCF25),linear-gradient(0deg, #FFCF25, #FFCF25),linear-gradient(0deg, #FFCF25, #FFCF25)",
              transition: "width 0.5s",
            }}
          ></div>
          <img src={banna2}></img>
        </div>

        <div className="pink-card-grid">
          {pinkCards.map((card) => (
            <Logic
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === pinkSelected || card.matched}
            />
          ))}
        </div>
        <div className="blue-card-grid">
          {blueCards.map((card) => (
            <Logic
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === blueSelected || card.matched}
            />
          ))}
        </div>
      </div>
      <button className="backbtn" onClick={() => navigate("/game")}>
        <img
          src={back}
          alt="back button"
        
        />
      </button>
    </div>
  )
}

export default PlayGame