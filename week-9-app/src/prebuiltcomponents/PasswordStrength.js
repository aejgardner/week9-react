import React, { Component } from "react";
import Form from 'react-bootstrap/Form';

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
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange} value={input} style={{ backgroundColor: colour }} className="form-control mb-3" type="password" placeholder="Password" />
            </Form.Group>
        )
    }
}

export default PasswordStrength;