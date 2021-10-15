import React from 'react'

export const CartWidjet = ( {cantidad} ) => {
    return (
        <li>
            <box-icon name='cart-alt'></box-icon>
            <p>{cantidad}</p>
        </li>
    )
}
