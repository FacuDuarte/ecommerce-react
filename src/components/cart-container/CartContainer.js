import React, { useContext } from "react";
import { CartContext } from "../cart-context/CartContext";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { itemsCart, clear } = useContext(CartContext);

  const clearItems = () => {
    clear();
  };
  return (
    <div>
      <h1>Cart Container</h1>
      {itemsCart.length > 0 ? (
        <>
          <Cart items={itemsCart} />
          <button onClick={clearItems}>Limpiar carrito</button>
        </>
      ) : (
        <>
        <h3>No tienes items en tu cart</h3>
        <Link to="/">Empezar a comprar</Link> 
        </>
      )}
    </div>
  );
};

export default CartContainer;
