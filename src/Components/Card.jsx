const Card = props => {//{number: 8, suit: '♠'}

    return ( 
      <div className={classes.card}>
        <p>{props.number}</p>
        <p>{props.suit}</p>
      </div>
    )

}

export default Card;