import Cards from "./Cards";

function Player(props) {
  return (
    <div className="player-cards">
      <h3>{props.name} Cards:</h3>
      <Cards currentCards={props.cards}/>
      <p>{props.onTotal(props.cards)}</p>
    </div>
  );
}

function Dealer(props) {
  return (
    <div className="dealer-cards">
      <h3>{props.name} Cards:</h3>
      <Cards currentCards={props.cards}/>
      <p>{props.onTotal(props.cards)}</p>
    </div>
  );
}

export { Player, Dealer };