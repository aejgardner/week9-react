import React, { Component } from "react";

class Clicked extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { clicked } = this.state;
        this.setState({ clicked: !clicked });
    }

    render() {
        const { clicked } = this.state;
        return (
            <p onClick={this.handleClick}>{clicked ? "Not clicked" : "Clicked"}</p>
        )
    }
}

export default Clicked;

