import Button from "./Button";
import { Player, Dealer } from "./PlayerDealer";
import Actions from "./Actions";
import { useState, useEffect } from "react";
import * as deckModule from "../Helper/cards.js";
import GameResult from "./GameResult";
import styles from './Game.module.css';

const DEALER_MAX_VALUES = 17;



function Game() {
  const [deck, setDeck] = useState([]);//[value, setValue]
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [mode, setMode]=useState('start');//toStart, 'start',  over
  const [sticked, setSticked]=useState(false);//add logic when sticked!
  const [result, setResult]=useState('');

  
  const startGameHandler=()=>{
    console.log(mode)
    setMode('start');
    console.log('game started afresh')
    setMode('inProgress');
    getStartingCards();
  }


  useEffect(() => {
    setDeck(deckModule.generateDeck()); //52
  }, []) 


  //check game is over
  useEffect(()=>{

    const gameOver = checkGameIsOver();
    if(gameOver.isOver){
      setMode('over');
      setResult(gameOver);
      console.log(gameOver)
    }
    
  }, [dealerCards, playerCards])



  const getStartingCards = () => {
    const { randomCard : randomCard1, updatedDeck: updateDeck1 } = deckModule.getRandomCard(deck);
    const { randomCard: randomCard2, updatedDeck: updatedDeck2 } = deckModule.getRandomCard(updateDeck1);
    setPlayerCards([randomCard1, randomCard2]);

    const { randomCard: dealerRandomCard1, updatedDeck: updatedDeck3 } = deckModule.getRandomCard(updatedDeck2);
    const { randomCard: dealerRandomCard2, updatedDeck: updatedDeck4 } = deckModule.getRandomCard(updatedDeck3);
    setDealerCards([dealerRandomCard1, dealerRandomCard2]);
 
  }

  const onStickHandler = () => {
    setSticked(true);
    let deckCopy=[...deck];
    let dealerCardsCopy = [...dealerCards];//doesn't update the state

    while (calculateCards(dealerCardsCopy) < DEALER_MAX_VALUES) {
      const { randomCard, updatedDeck } = deckModule.getRandomCard(deckCopy);
      dealerCardsCopy.push(randomCard);
      //setDeck(updatedDeck);
      deckCopy=updatedDeck;

      //setDealerCards(dealerCardsCopy);
      
    }
    setDeck(deckCopy);
    setDealerCards(dealerCardsCopy);

    const playerTotal = calculateCards(playerCards);
    const dealerTotal = calculateCards(dealerCardsCopy);
    let gameResult = '';
    if (playerTotal > 21 || (dealerTotal <= 21 && dealerTotal > playerTotal)) {
      gameResult = 'Dealer wins';
    } else if (dealerTotal > 21 || playerTotal > dealerTotal) {
      gameResult = 'Player wins';
    } else {
      gameResult = 'Tie game';
    }
    setResult(gameResult);
    setMode('over');
  };
  

 const generateDealerCards=()=>{
  console.log(calculateCards(dealerCards), ' calculate dealerCards')
    const {randomCard, updatedDeck} = deckModule.getRandomCard(deck);
    setDeck(updatedDeck);
    setDealerCards(prevDealerCards=>[...prevDealerCards, randomCard])
  
  //console.log('done!')
 }

  const onHitHandler = () => {
    const {randomCard, updatedDeck} = deckModule.getRandomCard(deck);
    setDeck(updatedDeck);
    setPlayerCards([...playerCards, randomCard])  
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

  const checkGameIsOver = () => {
    const result = { message: "", isOver: false, dealerScore: 0, playerScore: 0 };
    const playerResult = calculateCards(playerCards);
    const dealerResult = calculateCards(dealerCards);
  
    if (playerResult > 21) {
      result.message = "Player has bust, dealer wins!";
    } else if (dealerResult > 21) {
      result.message = "Dealer has bust, player wins!";
    } else if (sticked && dealerResult >= DEALER_MAX_VALUES) {
      if (playerResult > dealerResult) {
        result.message = "Player wins!";
      } else if (dealerResult > playerResult) {
        result.message = "Dealer wins!";
      } else {
        result.message = "Tie game!";
      }
    } else {
      return result;
    }
  
    result.isOver = true;
    result.dealerScore = dealerResult;
    result.playerScore = playerResult;
    return result;
  };
  
  
  return (
    <div className={styles.game}>
       {mode=='start'|| mode=='over'?<Button click={startGameHandler} classes='start'>Start game</Button>:null}
    { mode =='inProgress'?
     <>
          <Actions 
            onStick={onStickHandler}
            onHit={onHitHandler}
            disabled={sticked} />
          <Player 
            name="Player" 
            cards={playerCards}
            onTotal={calculateCards} />
          <Dealer name="Dealer" cards={dealerCards} onTotal={calculateCards} />
          </>
    
  :null}
  {mode=='over'?<GameResult results={result}/>: null}
  </div>
  );
}


// 

export default Game;