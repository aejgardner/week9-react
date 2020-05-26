import React, { Component } from "react";

class Colours extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0
        }

        this.nextColour = this.nextColour.bind(this);
    }

    nextColour() {
        const { colours } = this.props;
        const { index } = this.state;

        this.setState({
            index: (index + 1) % colours.length
        });
    }

    render() {
        const { colours } = this.props;
        const { index } = this.state;
        return (
            <div onClick={() => { this.nextColour() }} style={{ height: 200, width: 200, backgroundColor: colours[index] }}></div>
        )
    }
}

export default Colours;