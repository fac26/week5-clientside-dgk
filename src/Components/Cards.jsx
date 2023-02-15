import Card from "./Card";
import styles from './Cards.module.css';

const Cards = props => {//<Cards currentCards={}/>
  return (
    <ul className={styles.cards}>
      {props.currentCards.map(card=>(<Card 
        key={card.id}
        number={card.number}
        suit={card.suit}
        />)
        )}
    </ul>
  )
}

export default Cards;

//[{number: 8, suit: '♠', id},{number: 10, suit: '♠'}] with props ===player