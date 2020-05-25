import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({items}) => (
    <table>
        <thead>
            <tr>
                <th>Item Name</th>
                <th>Item Price</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => (
                <BasketItem name={ item.name } price={ item.price } />
            ))}
        </tbody>
    </table>
)

export default Basket;