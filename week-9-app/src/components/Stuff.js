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
        <People />
    </React.Fragment>
)

export default Stuff;