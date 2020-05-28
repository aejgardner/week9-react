import React from "react";
import Transform from "./Transform";

const TransformParent = () => {

    return (
        <>
            <p className="text text-primary">x => x * x</p>
            <Transform transform={(x) => x * x} />

            <p className="text text-primary">x => x + 1</p>
            <Transform transform={(x) => x + 1} />

            <p className="text text-primary">x => 2 * x</p>
            <Transform transform={(x) => 2 * x} />

            <p className="text text-primary">x => cos(x)</p>
            <Transform transform={(x) => Math.cos(x)} />
        </>
    )
}

export default TransformParent;
