import React from "react";

const Square = ({colour}) => {
    return <div style={{height: 200, width: 200, backgroundColor: colour}}></div>;
}

Square.defaultProps = {
    color: "blue"
}

export default Square;