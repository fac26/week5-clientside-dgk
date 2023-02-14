import Card from "./Card";

const Cards = props => {//<Cards currentCards={}/>
  console.log(props)
  return (
    <ul>
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