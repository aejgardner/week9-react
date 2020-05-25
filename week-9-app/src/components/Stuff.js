import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = ({square}) => (
    <React.Fragment>
        <Header>Cat</Header>
        <Paragraph message="Doodah" />
        {square ? <Square colour="orange"/> : null}
        <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
    </React.Fragment>
)

Stuff.defaultProps = {
    square: true
}

export default Stuff;