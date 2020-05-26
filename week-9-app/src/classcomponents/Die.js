import React, { Component } from "react";

class Die extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentNumber: 1
        }

        this.rollDie = this.rollDie.bind(this);
    }

    rollDie() {
        const { sides } = this.props;

        this.setState({ currentNumber: Math.ceil(Math.random() * sides) });
    }

    render() {
        const { currentNumber } = this.state

        return (
            <p onClick={this.rollDie} style={{ backgroundColor: "darkred", padding: 20 }}>{currentNumber}</p>
        )
    }
}

export default Die;