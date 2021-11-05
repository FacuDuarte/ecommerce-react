import React from 'react'
import ItemDetail from '../item-detail/ItemDetail'

const Cart = ({items}) => {
    return (
        <div>
            {items.map((currentItem) => {
                const {item} = currentItem
                return <ItemDetail {...item} quantity={currentItem.quantity}/>
            })}
        </div>
    )
}

export default Cart
