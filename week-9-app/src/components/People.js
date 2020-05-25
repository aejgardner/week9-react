import React from "react";

const People = ({names}) => (
    <ul>
        {names ? names.map(name => (
            <li>{name}</li>
        )) : "Nothing to see here"}
    </ul>
)

export default People;