import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";
import Basket from "./Basket";
import Clicked from "../classcomponents/Clicked";
import ToggleText from "../classcomponents/ToggleText";
import Counter from "../classcomponents/Counter";
import StepCounter from "../classcomponents/StepCounter";
import CatchMeIfYouCan from "../classcomponents/CatchMeIfYouCan";
import RollCall from '../classcomponents/RollCall';
import Colours from '../classcomponents/Colours';
import Die from '../classcomponents/Die';
// import LameGame from '../classcomponents/LameGame';
import Transform from "../formcomponents/Transform";
import Form from "../formcomponents/Form";
import KieransFields from "../formcomponents/KieransFields";

const Stuff = ({ square }) => {

    let items = [
        { name: "Coffee", price: 2.10 },
        { name: "Bananas", price: 3.50 },
        { name: "Milk", price: 250.65 },
        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
    ];

    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

    let colours = [
        "#C14412",
        "#EBB31A",
        "#8F5318",
        "#009EAD",
        "#395967"
    ];

    let numberSquarer = (num) => {
        return num * num
    }

    let fields = ["First Name", "Last Name", "Email"];

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
            <KieransFields
                fieldArray={fields}
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
            <StepCounter
                max={100} step={5}
            />
            <RollCall
                names={names}
            />
            <Die
                sides={6}
            />
            {/* <LameGame
                aim={5}
            /> */}
            <Clicked />
            <Colours
                colours={colours}
            />
            <Basket
                items={items}
            />
            {square ? <Square
                colour="hotpink"
            /> : null}
            <People
                names={names}
            />
            <Transform
                transform={numberSquarer}
            />{/* tranform prop contains a function that can then be called later */}
        </>
    )
}

Stuff.defaultProps = {
    square: true
}

export default Stuff;