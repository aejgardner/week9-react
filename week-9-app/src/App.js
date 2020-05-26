import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Clicked from "./classcomponents/Clicked";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stuff />
        <Clicked />
      </header>
    </div>
  );
}

export default App;
