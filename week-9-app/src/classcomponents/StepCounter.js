import React, { Component } from "react";

class StepCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        const { max, step } = this.props;
        const { counter } = this.state;

        let newCounter = counter + step;

        this.setState({ counter: newCounter > max ? max : newCounter });

    }

    decrement() {
        const { step } = this.props;
        const { counter } = this.state;

        let min = 0;

        let newCounter = counter - step;

        this.setState({ counter: newCounter < min ? min : newCounter });
    }

    render() {
        return (
            <>
                <button onClick={this.increment}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={this.decrement}>-</button>
            </>
        )
    }
}

export default StepCounter;