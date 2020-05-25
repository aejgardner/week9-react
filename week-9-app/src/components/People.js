import React from "react";

let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

const People = () => (
    <ul>
        {names.map(name => (
            <li>{name}</li>
        ))}
    </ul>
)

export default People;