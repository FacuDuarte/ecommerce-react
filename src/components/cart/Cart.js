import React from 'react'
import ItemDetail from '../item-detail/ItemDetail'

const Cart = ({items}) => {

    const total = items.map((currentItem) => {
        return currentItem.item.precio * currentItem.quantity
        
    })

    function sumar(){
        let count = 0
        total.forEach(element => {
            count += element
        })
        return count
    }
    
    return (
        <div>
            {items.map((currentItem) => {
                const {item} = currentItem
                return <ItemDetail {...item} quantity={currentItem.quantity}/>
            })}
            <h2>Su total es de: {sumar()}</h2>
        </div>
    )
}

export default Cart
