import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";

const Stuff = ({square}) => {

    let items = [
        { name: "Coffee", price: 2.10 },
        { name: "Bananas", price: 3.50 },
        { name: "Milk", price: 250.65 },
        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
    ];

    return (
        <React.Fragment>
            <Header>Cat</Header>
            <Paragraph>I am a cat</Paragraph>
            
            <Basket items={ items } />

            {square ? <Square colour="orange"/> : null}
            <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
        </React.Fragment>
    )
}

Stuff.defaultProps = {
    square: true
}

export default Stuff;