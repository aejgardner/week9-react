// import React, { Component } from "react";

// class LameGame extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             buttonIsHidden: true,
//             clickAttempt: false
//         }

//         this.startGame = this.startGame.bind(this);
//     }

//     startGame() {
//         const { aim } = this.props;
//         const { buttonIsHidden, clickAttempt } = this.state;

//         this.setState({
//             buttonIsHidden: !buttonIsHidden
//         });

//         let timeMeasured = performance.now();


//     }

//     makeAttempt() {
//         this.setState({
//             clickAttempt: true
//         });
//     }

//     render() {
//         const { buttonIsHidden, clickAttempt } = this.state;
//         const { aim } = this.props;

//         return (
//             <>
//                 <p>{aim} seconds</p>
//                 <button onClick={this.startGame}>Start</button>
//                 <button style={{ visibility: buttonIsHidden ? "hidden" : "visible" }} onClick={this.makeAttempt}>Now</button>
//             </>
//         )
//     }
// }

// export default LameGame;