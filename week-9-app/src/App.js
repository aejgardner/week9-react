import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header text="Hello" />
        <Stuff />
      </header>
    </div>
  );
}

export default App;
