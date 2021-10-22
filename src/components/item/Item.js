import React from 'react'

const Item = (id, nombre, plataforma, img, precio, stock,) => {
    return (
            <div className="card" >
                <img src={img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">{plataforma}</p>
                    <p className="card-text">${precio}</p>
                    <p className="card-text">Stock:{stock}</p>
                    <p className="card-text">Id:{id}</p>
                </div>
            </div>
    )
}

export default Item
