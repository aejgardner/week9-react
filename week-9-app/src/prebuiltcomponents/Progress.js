import React, { Component } from "react";
import { Button, ProgressBar, Card } from 'react-bootstrap';

class CatchMeIfYouCan extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { value } = this.state;

        this.setState({ value: value < 100 ? value + 10 : value, })
    }

    render() {
        let { value } = this.state;
        return (
            <Card style={{ width: '50rem' }} className="mt-4 mb-4">
                <Card.Header className="text text-primary">Progress Bar</Card.Header>
                <Card.Body>
                    <ProgressBar
                        style={{ minWidth: "100%" }}
                        className="mt-4 mb-4"
                        now={value}
                        variant="success"
                    />
                    <Button
                        variant="primary"
                        disabled={value === 100}
                        onClick={this.handleClick}
                        className="mb-4"
                    >More!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default CatchMeIfYouCan;