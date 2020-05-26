import React, { Component } from "react";

class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colour: "green",
            clicked: false
        }

        this.changeColour = this.changeColour.bind(this);
    }

    changeColour() {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <div onClick={ () => { this.changeColour() } } style={{ height: 200, width: 200, backgroundColor: this.state.clicked ? this.state.colour : this.props.colour }}></div>
        )
    }
} 

export default Square;