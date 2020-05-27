import React, { Component } from "react";

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            distanceFromTop: 200
        }

        this.jump = this.jump.bind(this);
    }

    jump() {
        const { jump } = this.props;
        const { distanceFromTop } = this.state;

        this.setState({ distanceFromTop: distanceFromTop + jump });
    }

    render() {
        const { distanceFromTop } = this.state;
        return (
            <button style={{ position: "absolute", top: distanceFromTop }} onClick={this.jump}>Jump</button>
        )
    }
}

export default CatchMeIfYouCan;