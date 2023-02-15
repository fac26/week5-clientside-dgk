
const GameResult=(props)=>{
    
    return <div>
        <h1>Game is over</h1>
        <p>{props.results.message}</p>
        <p>Player score: {props.results.playerScore}</p>
        <p>Dealer score: {props.results.dealerScore}</p>

    </div>
}

export default GameResult;