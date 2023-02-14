import Button from "./Button";
import Actions from "./Actions";
import { useState } from "react";
import { generateDeck } from "../Helper/cards.js";

console.log(generateDeck())

function Game() {
  const [deck, setDeck] = useState([]);//[value, setValue]
  const [playerCards, setPlayerCards] = useState([]);
  



    
  
    return (
      <div>
        <Actions />
        <Button>Start Game</Button>
      </div>
    );

}

export default Game;