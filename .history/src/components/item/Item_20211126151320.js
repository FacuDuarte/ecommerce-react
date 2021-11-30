import React from 'react'
import { Link } from 'react-router-dom'
import "./Item.css"
const Item = ({id, nombre, img, precio}) => {
    
    return (
            <div className="card m-3 p-0 col-sm-12 col-md-6 col-lg-4" style={{"width": "18rem"}}>
                <img src={img} className="card-img-top" alt={nombre}/>
                <div className="card-body bgCard">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">${precio}</p>
                    <button className="btn button">
                        <Link to={`/item/${id}`} className="buttonText">Ver Detalle</Link>
                    </button>
                </div>
            </div>
    )
}

export default Item
