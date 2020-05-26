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
        let newCounter = this.state.counter;

        if (this.state.counter < this.props.max) {
            this.setState({ counter: newCounter + 1 })
         } else return
    }

    decrement() {
        let newCounter = this.state.counter;

        if (this.state.counter > 0) {
        this.setState({ counter: newCounter - 1 })
        } else return
    }

    render() {
        return (
            <>
                <button onClick={() => { this.increment() }}>+</button>
                <p>{this.state.counter}</p>
                <button onClick={() => { this.decrement() }}>-</button>
            </>
        )
    }
} 

export default Counter;