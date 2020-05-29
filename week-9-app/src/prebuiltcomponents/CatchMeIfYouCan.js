import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Progress extends Component {
    constructor(props) {
        super(props);

        this.state = {
            distanceFromTop: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { distanceFromTop } = this.state;
        let { jump } = this.props;

        this.setState({ distanceFromTop: distanceFromTop + jump })
    }

    render() {
        let { distanceFromTop } = this.state;
        return (
            <Button
                variant="primary"
                onClick={this.handleClick}
                className="btn btn-success"
                style={{ position: "absolute", top: distanceFromTop }}
            >Jump!</Button>

        )
    }
}

export default Progress;

// Using only React Bootstrap components (there shouldn't be any HTML elements), create a <CatchMeIfYouCan jump={ 100 }> component. It should have a button that when clicked moves jump pixels down the screen.