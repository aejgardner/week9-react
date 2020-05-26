import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Clicked from "./classcomponents/Clicked";
import ToggleText from "./classcomponents/ToggleText";
import Counter from "./classcomponents/Counter";
import StepCounter from "./classcomponents/StepCounter";
import CatchMeIfYouCan from "./classcomponents/CatchMeIfYouCan";
import RollCall from './classcomponents/RollCall';
import Colours from './classcomponents/Colours';
import Die from './classcomponents/Die';

function App() {

  let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

  let colours = [
    "#C14412",
    "#EBB31A",
    "#8F5318",
    "#009EAD",
    "#395967"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <ToggleText initial="Hello" alternate="World" />
        <CatchMeIfYouCan jump={100} />
        <Counter initial={50} max={100} />
        <StepCounter max={100} step={5} />
        <RollCall names={names} />
        <Die sides={6} />
        <Colours colours={colours} />
        <Stuff />
        <Clicked />
      </header>
    </div>
  );
}

export default App;
