import React, { useContext } from "react";
import { CartContext } from "../cart-context/CartContext";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";

const CartContainer = () => {
  const { itemsCart, clear } = useContext(CartContext);

  const clearItems = () => {
    clear();
  };

  const total = itemsCart.map((currentItem) => {
      return currentItem.item.precio * currentItem.quantity
  })

  function sumar(){
      let count = 0
      total.forEach(element => {
          count += element
      })
      return count
  }

  return (
    <div>
      <h1>Cart Container</h1>
      {itemsCart.length > 0 ? (
        <>
          <Cart items={itemsCart} />
          <button onClick={clearItems}>Limpiar carrito</button>
          <h2>Su total es de: {sumar()}</h2>
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
