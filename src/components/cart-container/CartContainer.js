import React, { useContext } from 'react'
import { CartContext } from '../cart-context/CartContext'
import Cart from '../cart/Cart'
const CartContainer = () => {
    const {itemsCart, clear} = useContext(CartContext)

    const clearItems = () =>{
        clear()
    }
    return (
        <div>
            <h1>Bienvenido al carrito</h1>
            {/* {itemsCart.lenght > 0 ? (
                <Cart items={itemsCart}/>
            ): (
                <h3>No tienes items en tu carrito</h3>
            )} */}
            <button onClick={clearItems}>Limpiar carrito</button>
            <Cart items={itemsCart}/>
        </div>
    )
}

export default CartContainer
