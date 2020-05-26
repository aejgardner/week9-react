import React, { Component } from "react";

class RollCall extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }

        this.nextName = this.nextName.bind(this);
    }

    nextName() {
        const { names } = this.props;
        const { index } = this.state;

        this.setState({
            index: (index + 1) % names.length
        });
    }

    render() {
        const { index } = this.state;
        const { names } = this.props;

        return (
            <>
                <p style={{ backgroundColor: "navy" }}>{names[index]}</p>
                <button onClick={this.nextName}>Next</button>
            </>
        )
    }
}

export default RollCall;