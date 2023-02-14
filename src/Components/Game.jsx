import Button from "./Button";
import Actions from "./Actions";
import { useState, useEffect } from "react";
import * as deckModule from "../Helper/cards.js";
import Cards from './Cards'



function Game(props) {
  const [deck, setDeck] = useState([]);//[value, setValue]
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

 

  useEffect(() => {
    console.log(deckModule.generateDeck());
    setDeck(deckModule.generateDeck()); //52
  }, []) 

  const getStartingCards = () => {
    const { randomCard : randomCard1, updatedDeck: updateDeck1 } = deckModule.getRandomCard(deck);
    const { randomCard: randomCard2, updatedDeck: updatedDeck2 } = deckModule.getRandomCard(updateDeck1);

    setPlayerCards([randomCard1, randomCard2]);
    const { randomCard: dealerRandomCard1, updatedDeck: updatedDeck3 } = deckModule.getRandomCard(updatedDeck2);
    const { randomCard: dealerRandomCard2, updatedDeck: updatedDeck4 } = deckModule.getRandomCard(updatedDeck3);
    setDealerCards([dealerRandomCard1, dealerRandomCard2]);

    setDeck(updatedDeck4);
   }

  if(props.mode =='start'){
    getStartingCards();
    console.log(props.mode, ' if block')
    props.onSetMode('inProgress');
  }
  console.log('render')
 





  return (
    <div>
      <Actions />
    
      <p>{deck.map(card=><p>{card.number}{card.suit}</p>)} All cards</p>

      <Cards currentCards={playerCards}/>
      <Cards currentCards={dealerCards}/>


    </div>
  );

}

export default Game;