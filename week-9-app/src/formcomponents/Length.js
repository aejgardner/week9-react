import React, { Component } from "react";

class Length extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { input } = this.state;

        this.setState({ input: e.currentTarget.value })

        console.log(input.length) // will start at zero bc the length starts at zero if it has nothing in it - points to the state rather than the actual input below, and the state update happens after everything else

        console.log(e.currentTarget.value.length) // current target fetches a reference to the element itself, ie the input in the return below.
    }

    render() {
        const { input } = this.state;

        return (
            <input value={input} onChange={this.handleChange} placeholder="check length in console" className="form-control container mb-3 mt-3" />
        )
    }
}

export default Length;