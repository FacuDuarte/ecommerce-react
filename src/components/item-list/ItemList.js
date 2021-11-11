import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import "./ContainerItems.css";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";

const ItemList = () => {
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
    <>
    {categoryId ? <h2>{categoryId}</h2> : <h2>Todos los items</h2>}
    <div className="Container container row justify-content-center mx-auto">
      {currentProducts.map((products) => (
        <Item key={products.id} {...products} />
      ))}
    </div>
    </>
  );
};

export default ItemList;
