import React, { useContext } from 'react'
import { useLocation } from 'react-router'
import { CartContext } from '../cart-context/CartContext'
import ItemCount from '../item-count/ItemCount'


const ItemDetail = ({nombre, img, precio, plataforma, id, stock, quantity, setQuantity}) => {
    
    const location = useLocation()

    const {addItem, removeItem} = useContext(CartContext)
    
    const handleAddItem = () => {
        const item = {nombre, img, precio, plataforma, id, stock}
        addItem({item, quantity})
    }
    
    const handleRemoveItem = () => {
        removeItem(id)
    }

    return (
        <div>
            <div className="card mx-auto mt-4" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">Precio por unidad ${precio}</p>
                    
                    {location.pathname === "/cart" ? (null) : (
                    <>
                        <p className="card-text">Plataforma: {plataforma}</p>
                        <p className="card-text m-0">Stock: {stock}</p>
                        <ItemCount stock={stock} quantity={quantity} setQuantity={setQuantity}/>
                        <button className="button btn" onClick={handleAddItem}>Agregar al carrito</button>
                    </>
                    )}

                    {location.pathname === "/cart" && (
                        <>
                            <p className="card-text">Cantidad seleccionada: {quantity}</p>
                            <p className="card-text">Precio total de ${precio*quantity}</p>
                            <button className="button btn" onClick={handleRemoveItem}>Remover item</button>
                        </>   
                    )}
                    
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
