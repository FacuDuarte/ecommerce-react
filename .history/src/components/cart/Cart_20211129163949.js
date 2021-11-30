import React from 'react'
import ItemDetail from '../item-detail/ItemDetail'

const Cart = ({items}) => {
 
    return (
        <div className="container m-0 p-0 row justify-content-center mx-auto">
            {items.map((currentItem) => {
                const {item} = currentItem
                return <ItemDetail key={item.id} {...item} quantity={currentItem.quantity}/>
            })}
        </div>
    )
}

export default Cart
