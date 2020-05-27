import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Length from "./formcomponents/Length";
import PasswordStrength from "./formcomponents/PasswordStrength";
import TempConverter from "./formcomponents/TempConverter";
import List from "./formcomponents/List";
import Adder from "./formcomponents/Adder";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Length />
        <PasswordStrength />
        <TempConverter />
        <Stuff />
        <List />
        <Adder />
      </header>
    </div >
  );
}

export default App;
