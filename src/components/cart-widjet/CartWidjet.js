import React, { useContext } from "react";
import { CartContext } from "../cart-context/CartContext";
import "./CartWidjet.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

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
        <div style={{visibility: totalCart() > 0 ? "visible" : "hidden"}}>
        <Link to="/cart" className="iconCart">
            <FontAwesomeIcon icon={faCartArrowDown} />
            <p style={{paddingLeft: "3px"}}>{totalCart()}</p>
        </Link>
        </div>
    )
}

