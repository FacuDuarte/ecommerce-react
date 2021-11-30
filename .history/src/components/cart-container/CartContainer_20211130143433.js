import React, { useContext } from "react";
import { CartContext } from "../cart-context/CartContext";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { useState } from "react";
import "./CartContainer.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const CartContainer = () => {
  const { itemsCart, clear } = useContext(CartContext);
  const [orderCreatedId, setorderCreatedId] = useState(null)
  const [modal, setmodal] = useState(false)

  const clearItems = () => {
    clear();
  };

  const total = itemsCart.map((currentItem) => {
      return currentItem.item.precio * currentItem.quantity
  })

  function sumar () {
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
      total: sumar(),
      date: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const db = getFirestore()
    const orders = db.collection("orders")
    const batch = db.batch()

    orders.add(newOrder).then((response) => {
      itemsCart.forEach(({item, quantity}) => {
        const docRef = db.collection("products").doc(item.id)
        batch.update(docRef, {stock: item.stock - quantity})
      })
      batch.commit()
      setorderCreatedId(response.id)
  })

    console.log("nueva orden:", newOrder)
  }


  const showModal = () => {
    if (modal === false){
      setmodal(true)
    }
    else setmodal(false)
  }

  return (
    <div>
      {itemsCart.length > 0 ? (
        <>
          <Cart items={itemsCart} />
          <button className="button btn m-3" onClick={clearItems}>Limpiar carrito</button>
          <h2>Su total es de: ${sumar()}</h2>
          <button className="button btn m-3" onClick={showModal}>Finalizar compra</button>
          {orderCreatedId && (
            <h3>Tu orden con el id: {orderCreatedId} ha sido creada</h3>
          )}
        </>
      ) : (
        <>
          <div className="cartEmpty">
              <h3>No tienes items en tu carrito!</h3>
              <Link className="button btn" to="/">Empezar a comprar</Link>
          </div>
        </>
      )}

      {modal && (
        <div className="modalBg">
          <form className="modalForm">
            <button onClick={showModal}>X</button>
            <label htmlFor="mail">Ingrese su mail</label>
            <input type="text" id="mail" />
            <label htmlFor="name">Ingrese nombre</label>
            <input type="text" id="name" />
            <label htmlFor="phone">Ingrese su número de teléfono</label>
            <input type="number" id="phone" />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
