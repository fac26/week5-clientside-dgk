import Button from "./Button";
import Actions from "./Actions";
import { useState, useEffect } from "react";
import * as deckModule from "../Helper/cards.js";
import { Player, Dealer } from "./PlayerDealer";

function Game() {
  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [gameIsStarted, setgameIsStarted] = useState(false);

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
    setgameIsStarted(true);
  };

  const startGame = () => {
    setDeck(deckModule.generateDeck());
    getStartingCards();
  };

  return (
    <div>
      <Actions />
      {!gameIsStarted ? (
        <Button click={startGame}>Start Game</Button>
      ) : (
        <>
          <Player name="Player" cards={playerCards} />
          <Dealer name="Dealer" cards={dealerCards} />
          <p>{deck.map(card=><p>{card.number}{card.suit}</p>)} All cards</p>
        </>
      )}
    </div>
  );
}


// 

export default Game;