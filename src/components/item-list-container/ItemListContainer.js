import React from 'react'
import ItemCount from '../item-count/ItemCount'
import "./ItemList.css"
import ItemList from '../item-list/ItemList'

export const ItemListContainer = ({greeting}) => {
    
    return (
        <div>
            <h3 className="ItemList">{greeting}</h3>
            <ItemList />
            <ItemCount stock={7} inicial={1}/>
        </div>
    )
}
