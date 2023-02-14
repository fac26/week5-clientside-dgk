import Button from "./Button";
import Actions from "./Actions";
import { useState } from "react";
import * as deckModule from "../Helper/cards.js";



function Game() {
  const [deck, setDeck] = useState([]);//[value, setValue]
  const [playerCards, setPlayerCards] = useState([]);
  // const [dealerCards, setDealerCards] = useState([]);

  


const updatePlayerCards = () => {
    const {randomCard, updatedDeck} = deckModule.getRandomCard(deck);
    console.log(randomCard, ' random card')
    setPlayerCards((prevPlayerCards) =>[...prevPlayerCards, randomCard]);
    setDeck(updatedDeck);
}


const startGame = () => {
    setDeck(deckModule.generateDeck()); //52
    updatePlayerCards();
    console.log(playerCards, 'player card', deck)

}
    
  
    return (
      <div>
        <Actions />
        <Button click={startGame}>Start Game</Button>
      </div>
    );

}

export default Game;