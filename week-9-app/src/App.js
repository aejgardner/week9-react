import React from 'react';
import './App.css';
import Stuff from "./components/Stuff";
import Length from "./formcomponents/Length";
import PasswordStrength from "./formcomponents/PasswordStrength";
import TempConverter from "./formcomponents/TempConverter";
import List from "./formcomponents/List";
import Adder from "./formcomponents/Adder";
import RollCall from './classcomponents/RollCall';
import People from "./components/People";
import Footer from "./routingcomponents/Footer";
import FourOhFour from "./routingcomponents/FourOhFour";
import Square from "./components/Square";
import StepCounter from "./classcomponents/StepCounter";
import ProgressBar from "./prebuiltcomponents/Progress";

// import the ReactRouter components
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

function App() {

  let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Stuff} />
          <Route exact path="/length" component={Length} />
          <Route exact path="/passwordstrength" component={PasswordStrength} />
          <TempConverter exact path="/tempconverter" component={TempConverter} />
          <Route exact path="/rollcall">
            <RollCall
              names={names}
            />
          </Route>
          <Route exact path="/people">
            <People
              names={names}
            />
          </Route>
          <Route exact path="/squares" component={Square} />
          <Route exact path="/squares/:colour" render={({ match }) => (
            <Square colour={match.params.colour} />
          )} />
          <Route exact path="/steps/:max/:step" render={({ match }) => (
            <StepCounter max={match.params.max} step={match.params.step} />
          )} />
          <Route exact path="/list" component={List} />
          <Route exact path="/adder" component={Adder} />
          <FourOhFour />
        </Switch>
        <ProgressBar />
        <Footer />
      </Router>
    </div >
  );
}

export default App;

// {
//   square ? <Square
//     colour="hotpink"
//   /> : null
// }