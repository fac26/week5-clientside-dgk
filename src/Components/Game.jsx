import Button from "./Button";
import Actions from "./Actions";
import { useState, useEffect } from "react";
import * as deckModule from "../Helper/cards.js";



function Game() {
  const [deck, setDeck] = useState([]);//[value, setValue]
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [gameIsStarted, setgameIsStarted] = useState(false);
  useEffect(() => {
    console.log(deckModule.generateDeck());
    setDeck(deckModule.generateDeck()); //52
  }, [])





  const getStartingCards = () => {
    const { randomCard : randomCard1, updatedDeck: updateDeck1 } = deckModule.getRandomCard(deck);

   //console.log(randomCard, ' random card', updatedDeck, 'updated deck');
    const { randomCard: randomCard2, updatedDeck: updatedDeck2 } = deckModule.getRandomCard(updateDeck1);
    //console.log(randomCard2, ' random card2', updatedDeck2, 'updated deck2');
    setPlayerCards([randomCard1, randomCard2]);
    const { randomCard: dealerRandomCard1, updatedDeck: updatedDeck3 } = deckModule.getRandomCard(updatedDeck2);
    const { randomCard: dealerRandomCard2, updatedDeck: updatedDeck4 } = deckModule.getRandomCard(updatedDeck3);

    setDealerCards([dealerRandomCard1, dealerRandomCard2]);
    setDeck(updatedDeck4);
    setgameIsStarted(true);

  }

  // const generateFourCards=()=>{
  //   const cards=[];
  //   for(let i=0; i<4; i++){
  //     const { randomCard, updatedDeck } = deckModule.getRandomCard(deck);
  //     cards.push({randomCard});
  //   }
  //   return cards;
  // }


  const startGame = () => {
    // console.log(deckModule.generateDeck());
    // setDeck(deckModule.generateDeck()); //52
    getStartingCards();
    //console.log(playerCards, 'player card', deck)

  }


  return (
    <div>
      <Actions />
      {!gameIsStarted ? <Button click={startGame}>Start Game</Button> : null}
      <p>{deck.map(card=><p>{card.number}{card.suit}</p>)} All cards</p>

      {playerCards.length != 0 ? <p>Player cards {playerCards.map(card=><p>{card.number}{card.suit}</p>)}</p> : null}
      {dealerCards.length != 0 ? <p>Dealer cards {dealerCards.map(card=><p>{card.number}{card.suit}</p>)}</p> : null}

    </div>
  );

}

export default Game;