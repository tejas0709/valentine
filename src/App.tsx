import React, { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure?",
  "Are you really sure?",
  "Please booboo?",
  "Take your time, maybe reconsider?",
  "Pookie you're breaking my heart :(",
  "Come on you won't find another me!",
  "So, you are really stubborn huh?",
  "Don't do this to me ",
  "I'm gonna cry :(",
  "You never loved me, did you?",
  "But I still love you, so please say yes",
  "You know what I'll stop asking now",
  "Just kidding, Please say yes",
  "So you have made up your mind then?",
  "I could have given you the world",
  "Last chance, I'm not gonna ask again",
  "You know I'm not gonna stop until you say yes",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img alt="bears kissing" src="/ily.gif" width="300" height="300" />
          <div className="text">Yay, I love you so much onlyyy!!!!!</div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="/cute-bear.gif"
            width="300"
            height="300"
          />

          <div className="question">Will you be my Valentine?</div>
          <div className="button-container">
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
