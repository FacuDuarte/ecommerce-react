import React from 'react'
import "./ItemList.css"

export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h3 className="ItemList">{greeting}</h3>
        </div>
    )
}
