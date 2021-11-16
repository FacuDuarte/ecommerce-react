import React, { useState, useEffect } from "react";
import "./ItemList.css"
import ItemList from '../item-list/ItemList'
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";

export const ItemListContainer = () => {
    const { categoryId } = useParams();

    const [currentProducts, setCurrentProducts] = useState([]);
  
    useEffect(() => {
      const db = getFirestore()
      const itemCollection = db.collection("products")
  
      if(!categoryId){
        itemCollection.get().then(querySnapshot => {
          if (querySnapshot.size === 0) {
            console.log("no hay items")
            return
          }
          setCurrentProducts(querySnapshot.docs.map(document => ({
            id: document.id,
            ...document.data()
          })))
        }).catch(error => console.log(error))
        return
      }
  
      const productsByCategory = itemCollection.where("category", "==", categoryId)
      
      productsByCategory.get().then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log("no hay items")
          return
        }
        setCurrentProducts(querySnapshot.docs.map(document => ({
          id: document.id,
          ...document.data()
        })))
      }).catch(error => console.log(error))
      return
  
    }, [categoryId])






    return (
        <div>
            <ItemList />
        </div>
    )
}
