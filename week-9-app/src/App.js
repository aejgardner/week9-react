import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Clicked from "./classcomponents/Clicked";
import ToggleText from "./classcomponents/ToggleText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToggleText initial="Hello" alternate="World" />
        <Stuff />
        <Clicked />
      </header>
    </div>
  );
}

export default App;
