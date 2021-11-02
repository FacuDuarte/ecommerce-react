import React from 'react'
import ItemCount from '../item-count/ItemCount'
const ItemDetail = ({nombre, img, precio, plataforma, id, stock}) => {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={img} className="card-img-top" alt={nombre}/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">${precio}</p>
                    <p className="card-text">Plataforma: {plataforma}</p>
                    <p className="card-text">ID: {id}</p>
                    <p className="card-text">Stock: {stock}</p>
                    <ItemCount stock={stock} inicial={0}/>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail
