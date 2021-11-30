import React, { useState, useEffect } from "react";
import Item from "../item/Item";
import { useParams } from "react-router";
import { getFirestore } from "../../firebase";
import Loader from "../loader/Loader";

const ItemList = () => {
  const { categoryId } = useParams();

  const [currentProducts, setCurrentProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection("products")

    if(!categoryId){
      itemCollection.get().then(querySnapshot => {
        if (querySnapshot.size === 0) {
          console.log("no hay items")
          return
        }
        setisLoading(false)
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
      {isLoading && <Loader/>}
      <div className="container m-0 p-0 row justify-content-center mx-auto">
        {currentProducts.map((products) => (
          <Item key={products.id} {...products} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
