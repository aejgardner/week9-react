import React, { Component } from "react";

class ToggleText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.toggleText = this.toggleText.bind(this);
    }

    toggleText() {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        const { initial, alternate } = this.props;
        return (
            <>
                <p>{this.state.clicked ? initial : alternate}</p>
                <button onClick={() => { this.toggleText() }}>Toggle</button>
            </>
        )
    }
} 

export default ToggleText;