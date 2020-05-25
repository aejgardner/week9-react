import React from "react";

const BasketItem = ({name, price}) => (
    <tr>  
        <td>{name}</td>
        <td>{price}</td>
    </tr>
)

export default BasketItem;