import React, { Component } from "react";

class PasswordStrength extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let currentValue = e.currentTarget.value;

        this.setState({ input: currentValue })
    }

    render() {
        const { input } = this.state;
        let colour = "white";

        if (input.length >= 1 && input.length < 9) {
            colour = "red"
        } else if (input.length >= 9 && input.length < 16) {
            colour = "orange"
        } else if (input.length >= 16) {
            colour = "green"
        }

        return (
            <input value={input} type="password" style={{ backgroundColor: colour }} onChange={this.handleChange} placeholder="password strength tester" className="form-control container mb-3" />
        )
    }
}

export default PasswordStrength;

// Create a <PasswordStrength> component. It should contain an <input> with the type password. The background styling should change depending on the length of the password:

// If it's empty the background shouldn't have styling.
// If it's less than 9 it should be red.
// If it's less than 16 it should be orange.
// If it's 16 or more then it should be green.