import { products } from '../data/products'
import React, { useState } from 'react'
import Item from '../item/Item'

const ItemList = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setisFinished] = useState(false);
    const [currentProducts, setCurrentProducts] = useState([]);
   
    const task = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000); 
    })

    task
    .then((result)=>{
        setCurrentProducts(result)
    })
    .finally(()=>{
        setisFinished(true)
        setIsLoading(false)
    })
 

    return (
        <div>
            <h1>Promises</h1>
            {isLoading && <h3>Loading...</h3>}
            {isFinished && <h2>Se ha finalizado la respuesta</h2>}
            {currentProducts.map(products => (
                <Item key={products.id} {...products} />
            ))}
        </div>
    )
}

export default ItemList
