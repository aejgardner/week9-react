import React from "react";

const Paragraph = ({message}) => (
    <p>{message ? message : "Hello, world"}</p>
)

export default Paragraph;