import React from "react";

const People = ({ names }) => (
    names.length ?
        <ul onClick={() => { console.log("Hello, world") }}>
            {names.map((name, index) => (
                <li key={index}>{name}</li>
            ))}
        </ul>
        : <p>Nothing to see here</p>
)

export default People;