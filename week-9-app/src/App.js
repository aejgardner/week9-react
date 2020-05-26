import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Clicked from "./classcomponents/Clicked";
import ToggleText from "./classcomponents/ToggleText";
import Counter from "./classcomponents/Counter";
import StepCounter from "./classcomponents/StepCounter";
import CatchMeIfYouCan from "./classcomponents/CatchMeIfYouCan";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleText initial="Hello" alternate="World" />
        <CatchMeIfYouCan jump={100} />
        <Counter initial={50} max={100} />
        <StepCounter max={100} step={5} />
        <Stuff />
        <Clicked />
      </header>
    </div>
  );
}

export default App;
