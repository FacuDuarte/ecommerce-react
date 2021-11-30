import { createContext, useState } from "react";
import React from 'react'


export const CartContext = createContext([])

const CartProvider = ({children}) => {
    
    const [itemsCart, setItemsCart] = useState([])

    const addItem = (currentItem) => {
        if (itemsCart.some(({item}) => item.id === currentItem.item.id)) {
            return;
        }
        setItemsCart([...itemsCart, currentItem])
    }

    const removeItem = (itemId) => {
        const newArray = itemsCart.filter(element => element.item.id !== itemId)
        setItemsCart(newArray)
    }
    

    const clear = () => setItemsCart([])

    return ( <CartContext.Provider
    value={{itemsCart, addItem, removeItem, clear}}>
    {children}
    </CartContext.Provider> )
}

export default CartProvider
