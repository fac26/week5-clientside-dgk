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
  const cards = props.isSticked || props.mode=='over'?props.cards:[props.cards[0]];
  return (
    <div className="dealer-cards">
      <h3>{props.name} Cards:</h3>
      <Cards currentCards={cards}/>
      {cards.length>1? <p>{props.onTotal(props.cards)}</p>:null}
    </div>
  );
}

export { Player, Dealer };