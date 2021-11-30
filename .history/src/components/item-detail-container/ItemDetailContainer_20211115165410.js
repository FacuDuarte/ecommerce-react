import React, { useEffect, useState } from 'react'
import ItemDetail from '../item-detail/ItemDetail'
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase'

export const ItemDetailContainer = () => {
    
    const { itemId } = useParams()
    
    const [item, setItem] = useState(null);
    const [quantity, setQuantity] = useState(0);

   useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection("products")
    const currentItem = itemCollection.doc(itemId)

    currentItem.get().then(document => {
        if (!document.exists){
            console.log("no item")
            return
        }
        setItem({id : document.id, ...document.data()})
    })

   }, [itemId]);

    return (
        <div>
            <ItemDetail {...item} quantity={quantity} setQuantity={setQuantity}/>
        </div>
    )
}
