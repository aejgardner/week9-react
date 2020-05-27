import React, { Component } from "react";

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            input: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let currentValue = e.currentTarget.value;

        this.setState({ input: currentValue })
    }

    handleSubmit() {
        const { items, input } = this.state;

        this.setState({ items: [...items, input], input: "" })
    }

    render() {
        const { items, input } = this.state;

        return (
            <>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <input value={input} placeholder="add item" type="text" onChange={this.handleChange} className="form-control container" />
                <button onClick={this.handleSubmit}>Add</button>
            </>
        )
    }
}

export default List;

// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.