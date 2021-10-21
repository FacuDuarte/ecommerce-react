import React from 'react'
import ItemCount from '../item-count/ItemCount'
import "./ItemList.css"


export const ItemListContainer = ({greeting}) => {
    
    return (
        <div>
            <h3 className="ItemList">{greeting}</h3>
            <ItemCount stock={7} inicial={1}/>
        </div>
    )
}
