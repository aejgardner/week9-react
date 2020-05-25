import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square";
import People from "./People";

const Stuff = () => (
    <React.Fragment>
        <Header text="Howdy" />
        <Paragraph message="Doodah" />
        <Square colour="orange" />
        <People names={["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]} />
    </React.Fragment>
)

export default Stuff;