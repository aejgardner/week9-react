import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Basket from "./Basket";
import Clicked from "../classcomponents/Clicked";
import ToggleText from "../classcomponents/ToggleText";
import Counter from "../classcomponents/Counter";
import CatchMeIfYouCan from "../classcomponents/CatchMeIfYouCan";
import Colours from '../classcomponents/Colours';
import Die from '../classcomponents/Die';
import Form from "../formcomponents/Form";
import TransformParent from "../formcomponents/TransformParent";

const Stuff = ({ square }) => {

    let items = [
        { name: "Coffee", price: 2.10 },
        { name: "Bananas", price: 3.50 },
        { name: "Milk", price: 250.65 },
        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
    ];

    let fields = ["First Name", "Last Name", "Email"];

    let colours = [
        "#C14412",
        "#EBB31A",
        "#8F5318",
        "#009EAD",
        "#395967",
    ];

    return (
        <>
            <Header>
                Cat
            </Header>
            <Paragraph>
                I am a cat
            </Paragraph>
            <Form
                fields={fields}
            />
            <ToggleText
                initial="Hello" alternate="World"
            />
            <CatchMeIfYouCan
                jump={100}
            />
            <Counter
                initial={50} max={100}
            />
            <Die
                sides={6}
            />
            <Clicked />
            <Colours
                colours={colours}
            />
            <Basket
                items={items}
            />
            <TransformParent />{/* tranform prop contains a function that can then be called later */}
        </>
    )
}

Stuff.defaultProps = {
    square: true
}

export default Stuff;