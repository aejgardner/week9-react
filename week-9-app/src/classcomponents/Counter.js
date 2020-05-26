import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: this.props.initial
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    increment() {
        const { max } = this.props;
        const { counter } = this.state;

        this.setState({ counter: counter + (counter < max ? 1 : 0) })
    }

    decrement() {
        const { counter } = this.state;

        this.setState({ counter: counter - (counter > 0 ? 1 : 0) })
    }

    render() {
        return (
            <>
                <button onClick={ this.increment }>+</button>
                <p>{this.state.counter}</p>
                <button onClick={ this.decrement }>-</button>
            </>
        )
    }
} 

export default Counter;