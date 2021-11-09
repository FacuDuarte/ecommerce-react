import React, { useContext } from "react";
import { CartContext } from "../cart-context/CartContext";

export const CartWidjet = ( ) => {
    const { itemsCart } = useContext(CartContext);

    function totalCart(){
        let count = 0
        itemsCart.forEach(element => {
            count += element.quantity
        })
        return count
    }
    

    return (
        <li style={{visibility: totalCart() > 0 ? "visible" : "hidden"}}>
            <box-icon name='cart-alt'></box-icon>
            <p>{totalCart()}</p>
        </li>
    )
}

