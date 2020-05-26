import React from "react";

const People = ({names}) => (
    <ul onClick={() => {console.log("Hello, world")}}>
        {names.length ? names.map((name, index) => (
            <li key={index}>{name}</li>
        )) : "Nothing to see here"}
    </ul>
)

export default People;