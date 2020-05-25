import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
import Square from "./components/Square";
import People from "./components/People";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <People />
        <Square />
        <Paragraph />
      </header>
    </div>
  );
}

export default App;
