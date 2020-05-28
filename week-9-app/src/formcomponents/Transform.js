import React, { Component } from "react";

class Transform extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            result: "Start typing..."
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { transform } = this.props;

        let currentValue = e.currentTarget.value;

        this.setState({ input: currentValue, result: transform(currentValue) })
    }

    render() {
        const { input, result } = this.state;

        return (
            <>
                <label>Input:
                    <input
                        value={input}
                        type="number"
                        onChange={this.handleChange}
                        className="form-control" />
                </label>
                <p>Result: {result}</p>
            </>
        )
    }
}

export default Transform;

// Create a <Transform transform={ /* ...your function here... */ }> component. It should accept a function that takes a number and returns a number (e.g. a squaring function x => x * x or an increment function x => x + 1). The component should have an <input type="number"> and a <p>. When the user types into the <input> the <p> should output the result of running the number through the transform function. Try adding a few <Transform> components to your app with a different function for each one.