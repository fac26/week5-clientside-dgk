function Player(props) {
  return (
    <div>
      <h3>{props.name} Cards:</h3>
      {props.cards.map((card) => (
        <p key={card.id}>{card.number}{card.suit}</p>
      ))}
      <p>{props.onTotal(props.cards)}</p>
    </div>
  );
}

function Dealer(props) {
  return (
    <div>
      <h3>{props.name} Cards:</h3>
      {props.cards.map((card, index) => (
        <p key={card.id}>{card.number}{card.suit}</p>
      ))}
    </div>
  );
}

export { Player, Dealer };