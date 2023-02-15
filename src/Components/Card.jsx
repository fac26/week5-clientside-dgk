import styles from './Card.module.css';

const Card = props => {//{number: 8, suit: '♠'}
    const color = (props.suit === '♦' || props.suit === '♥') ? styles.red:'';
 

    return (

      <li className={`${styles.card} ${color}`}>
        <p className="card-number">{props.number}</p>
        <p className="class-suit">{props.suit}</p>
      </li>
    )

}

export default Card;