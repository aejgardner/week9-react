import React, { Component } from "react";

class Adder extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numbers: [],
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let currentValue = e.currentTarget.value;

        this.setState({ input: currentValue })
    }

    handleSubmit() {
        const { numbers, input } = this.state;

        this.setState({ numbers: [...numbers, input], input: "" })
    }

    render() {
        const { numbers, input } = this.state;
        const total = numbers.reduce((acc, val) => acc + +val, 0)

        return (
            <>
                <ul>
                    {numbers.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p>Total: {total}</p>
                <input value={input} placeholder="add item" type="text" onChange={this.handleChange} className="form-control container" />
                <button onClick={this.handleSubmit}>Add</button>
            </>
        )
    }
}

export default Adder;

// Create an <Adder> component. It should have a number <input> field and an "Add" <button>. When the "Add" button is pressed the number should be added to a list of numbers on screen and the total of all the numbers in the list should be displayed below. Make sure you test the total is correct: try 1, 2, and 3 and check you get 6