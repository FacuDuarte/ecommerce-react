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

  const sumar = () => {
      let count = 0
      total.forEach(element => {
          count += element
      })
      return count
  }

  const finishPurchase = () => {
    const newItems = itemsCart.map(({item, quantity}) => ({
      item: {
        id: item.id,
        name: item.nombre,
        price: item.precio
      },
      quantity
    }))

    const newOrder = {
      buyer: {
        name: "Facu",
        phone: 1231234,
        email: "facu@facu.com"
      },
      items: newItems,
      sumar
    }

    console.log("nueva orden:", newOrder)
  }


  return (
    <div>
      <h1>Cart Container</h1>
      {itemsCart.length > 0 ? (
        <>
          <Cart items={itemsCart} />
          <button onClick={clearItems}>Limpiar carrito</button>
          <h2>Su total es de: {sumar()}</h2>
          <button onClick={finishPurchase}>Finalizar compra</button>
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
