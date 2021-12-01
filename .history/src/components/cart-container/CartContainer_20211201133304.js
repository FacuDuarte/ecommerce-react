import React, { useContext } from "react";
import { CartContext } from "../cart-context/CartContext";
import Cart from "../cart/Cart";
import { Link } from "react-router-dom";
import { getFirestore } from "../../firebase";
import { useState } from "react";
import "./CartContainer.css"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import swal from 'sweetalert';

const CartContainer = () => {
  const { itemsCart, clear } = useContext(CartContext);
  const [orderCreatedId, setorderCreatedId] = useState(null)
  const [modal, setModal] = useState(false)

  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: ""
  })
 
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
      quantity,
      total: quantity * item.precio,
    }))

    const newOrder = {
      buyer: {
        name: dataForm.name,
        phone: dataForm.phone,
        email: dataForm.email
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

    showModal()
    showAlert()
  }


  const showModal = () => {
    if (modal === false){
      setModal(true)
    }
    else setModal(false)
  }

  const showAlert = () => {
    swal({
      title:"Tu orden a sido creada, id:",
      text: orderCreatedId,
      icon: "success",
      button: "Aceptar",
      timer: "2000",
    })
  }

  return (
    <div>
      {itemsCart.length > 0 ? (
        <>
          <Cart items={itemsCart} />
          <button className="button btn m-3" onClick={clearItems}>Limpiar carrito</button>
          <h2>Su total es de: ${sumar()}</h2>
          <button className="button btn m-3" onClick={showModal}>Finalizar compra</button>
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
          <form className="modalForm p-2">
            <button className="button btn closeButton" onClick={showModal}>X</button>
            <label htmlFor="mail" className="formText">Ingrese su mail</label>
            <input type="text" id="mail" onChange={(e) => setDataForm({...dataForm, email: e.target.value})}/>
            <label htmlFor="name" className="formText">Ingrese nombre</label>
            <input type="text" id="name" onChange={(e) => setDataForm({...dataForm, name: e.target.value})}/>
            <label htmlFor="phone" className="formText">Ingrese su número de teléfono</label>
            <input type="text" id="phone" onChange={(e) => setDataForm({...dataForm, phone: e.target.value})}/>
            <button className="button btn m-2" onClick={finishPurchase} disabled={dataForm.email.length < 5 ? true : false}>Registrarse</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
