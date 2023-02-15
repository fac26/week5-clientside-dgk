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
    setDealerCards([]);
    setPlayerCards([]);
    setSticked(false);
    getStartingCards();
    setMode('inProgress');
  }

  useEffect(() => {
    setDeck(deckModule.generateDeck()); //first time only
  }, []) 


  //check game is over when player or dealer cards change
  useEffect(()=>{    
      const gameOver = checkGameIsOver();
      
      if(gameOver.isOver){     
          setMode('over');
          setResult(gameOver);
          setDeck(deckModule.generateDeck()); //52        
      }

  }, [dealerCards, playerCards])

  useEffect(()=>{
    if(sticked){
      generateDealerCards();
      const gameOver = checkGameIsOver();
      if(gameOver.isOver){     
          setMode('over');
          setResult(gameOver);
      }
    }

  }, [sticked])//when sticked state changes only

 

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
  };
  

 const generateDealerCards=()=>{

  let deckCopy = [...deck];
  const dealerCardsCopy = [...dealerCards];
  while(calculateCards(dealerCardsCopy)<DEALER_MAX_VALUES){
    const { randomCard, updatedDeck } = deckModule.getRandomCard(deckCopy);
    dealerCardsCopy.push(randomCard);
    deckCopy = updatedDeck;
  }

  setDealerCards([...dealerCardsCopy]);
  setDeck([...dealerCardsCopy]);
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

  const checkGameIsOver= () =>{
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
  }
  
  
  return (
    <div className={styles.game}>
      {mode=='start'|| mode=='over'
        ?<Button click={startGameHandler} classes='start'>Start game</Button>
        :null}
      {mode=='inProgress'
      ? <Actions 
           onStick={onStickHandler}
            onHit={onHitHandler}
            disabled={sticked} />
      :null}

      { mode =='inProgress' || mode=='over'
      ? <>
          <Player 
            name="Player" 
            cards={playerCards}
            onTotal={calculateCards} 
          />
           <Dealer 
              name="Dealer" 
              cards={dealerCards} 
              onTotal={calculateCards} 
              isSticked={sticked}
              mode={mode}
            />      
          </>
      :null}

      {mode=='over'?<GameResult results={result}/>: null}
    </div>
  );
}

export default Game;