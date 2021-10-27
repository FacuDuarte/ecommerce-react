import { products } from '../data/products'
import React, { useState } from 'react'
import ItemDetail from '../item-detail/ItemDetail'

const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
   
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000); 
    })

    task
    .then((result)=>{
        setItem(result)
    })
    
    return (
        <div>
            <ItemDetail {...item} />
        </div>
    )
}

export default ItemDetailContainer
