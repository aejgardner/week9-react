import React, { Component } from "react";
import { Button, Form, ListGroup } from 'react-bootstrap';

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleChange(e) {
        let currentValue = e.currentTarget.value;

        this.setState({ input: currentValue })
    }

    addItem() {
        const { items, input } = this.state;

        this.setState({ items: [...items, input] })
    }

    render() {
        const { input, items } = this.state;
        return (
            <>
                <ListGroup>
                    {items.map((item, index) => (
                        <ListGroup.Item variant="success" key={index}>{item}</ListGroup.Item>
                    ))}
                </ListGroup>

                <Form.Group>
                    <Form.Label>Add Item</Form.Label>
                    <Form.Control value={input} onChange={e => this.handleChange(e)} className="form-control mb-3" type="text" />
                    <Button
                        variant="primary"
                        onClick={this.addItem}
                    >Add</Button>
                </Form.Group>
            </>
        )
    }
}

export default List;