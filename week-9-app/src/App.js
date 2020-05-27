import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Length from "./formcomponents/Length";
import PasswordStrength from "./formcomponents/PasswordStrength";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Length />
        <PasswordStrength />
        <Stuff />
      </header>
    </div>
  );
}

export default App;
