import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Length from "./formcomponents/Length";
import PasswordStrength from "./formcomponents/PasswordStrength";
import TempConverter from "./formcomponents/TempConverter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Length />
        <PasswordStrength />
        <TempConverter />
        <Stuff />
      </header>
    </div>
  );
}

export default App;
