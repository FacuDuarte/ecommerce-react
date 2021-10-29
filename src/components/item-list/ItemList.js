import { products } from '../data/products'
import React, { useState, useEffect } from 'react'
import Item from '../item/Item'
import './ContainerItems.css'
import { useParams } from 'react-router'

const ItemList = () => {

    const {categoryId} = useParams()

    const [currentProducts, setCurrentProducts] = useState([]);
    
    useEffect(() => {
        if (categoryId) {
            const task = new Promise ((resolve) => {
                setTimeout(() => {
                    resolve(products)
                }, 1500);
            })

            task
            .then((result)=>{
                setCurrentProducts(result)
            })
        }
    }, [categoryId])

    
    const task = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500); 
    })

    task
    .then((result)=>{
        setCurrentProducts(result)
    })
 
    return (
        <div className="Container container row justify-content-center mx-auto">
            {currentProducts.map(products => (
                <Item key={products.id} {...products} />
            ))}
        </div>
    )
}

export default ItemList
