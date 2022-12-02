import logo from "./logo.svg";
import "./App.css";
import Dice1 from "./images/Dice1.png";
import Dice2 from "./images/Dice2.png";
import Dice3 from "./images/Dice3.png";
import Dice4 from "./images/Dice4.png";
import Dice5 from "./images/Dice5.png";
import Dice6 from "./images/Dice6.png";
import { useState } from "react";

function App() {
  let diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [image1, setDiceImage1] = useState(diceImages[0]);
  const [image2, setDiceImage2] = useState(diceImages[1]);

  const rollDice = () => {
    var randomNum1 = Math.floor(Math.random() * 6);
    var randomNum2 = Math.floor(Math.random() * 6);
    setDiceImage1(diceImages[randomNum1]);
    setDiceImage2(diceImages[randomNum2]);
  };

  return (
    <div className="App">
      <center>
        <h1> Dice roller</h1>
        <div className="box">
          <img className="square" src={image1}></img>
          <div style={{ width: "6px", display: "inline-block" }}></div>
          <img className="square" src={image2}></img>
        </div>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={rollDice}
        >
          Roll Dice
        </button>
      </center>
    </div>
  );
}

export default App;
