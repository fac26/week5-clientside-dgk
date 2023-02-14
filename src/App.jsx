// import { useState } from 'react'
import Game from "./Components/Game";
import Button from "./Components/Button";
import { useState } from "react";


function App() {

  const [mode, setMode]=useState('toStart');//toStart, 'start', inProgress, over
  const startGameHandler=()=>{
    console.log(mode)
    setMode('start')
    
  }


    return (
      <div>
        {mode=='toStart'?<Button click={startGameHandler}>Start game</Button>:null}
        {mode}
        {mode=='start'|| mode=='inProgress'?<Game onSetMode={setMode} mode={mode} />:null}
      </div>
    );

}

export default App;