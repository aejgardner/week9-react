import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.changeColour = this.changeColour.bind(this);
    }

    changeColour() {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <div onClick={() => { this.changeColour() }} style={{ height: 200, width: 200, backgroundColor: this.props.colour }}></div>
        )
    }
}

export default Square;