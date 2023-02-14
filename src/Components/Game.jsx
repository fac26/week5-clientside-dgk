import Button from "./Button";
import Actions from "./Actions";
import { useState, useEffect } from "react";
import * as deckModule from "../Helper/cards.js";
import { Player, Dealer } from "./PlayerDealer";

function Game() {
  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [gameIsStarted, setGameIsStarted] = useState(false);

  useEffect(() => {
    console.log(deckModule.generateDeck());
    setDeck(deckModule.generateDeck());
  }, []);

  const getStartingCards = () => {
    const { randomCard: randomCard1, updatedDeck: updateDeck1 } =
      deckModule.getRandomCard(deck);

    const { randomCard: randomCard2, updatedDeck: updatedDeck2 } =
      deckModule.getRandomCard(updateDeck1);

    setPlayerCards([randomCard1, randomCard2]);

    const { randomCard: dealerRandomCard1, updatedDeck: updatedDeck3 } =
      deckModule.getRandomCard(updatedDeck2);
    const { randomCard: dealerRandomCard2, updatedDeck: updatedDeck4 } =
      deckModule.getRandomCard(updatedDeck3);

    setDealerCards([dealerRandomCard1, dealerRandomCard2]);
    setDeck(updatedDeck4);
    setGameIsStarted(true);
  };

  const startGame = () => {
    setDeck(deckModule.generateDeck());
    getStartingCards();
  };

  const onStickHandler = () => {

  }

  const onHitHandler = () => {
    const {randomCard, updatedDeck} = deckModule.getRandomCard(deck);
    setDeck(updatedDeck);
    setPlayerCards([...playerCards, randomCard])
    console.log("clicked from game.jsx")
  }

  const calculateCards = (cards) => {
    return cards.reduce((total, current) => {
      let number = current.number;
      if (isNaN(number)) {
        // Handle face cards and aces
        if (number === "A") {
          if (total + 11 > 21) {
            number = 1;
          } else {
            number = 11;
          }
        } else {
          number = 10;
        }
      }
      return total + number;
    }, 0);
  };
  return (
    <div>
      
      {!gameIsStarted ? (
        <Button click={startGame}>Start Game</Button>
      ) : (
        <>
          <Actions 
            onStick={onStickHandler}
            onHit={onHitHandler} />
          <Player 
            name="Player" 
            cards={playerCards}
            onTotal={calculateCards} />
          <Dealer name="Dealer" cards={dealerCards} />
          
        </>

      )}
    </div>
  );
}


// 

export default Game;