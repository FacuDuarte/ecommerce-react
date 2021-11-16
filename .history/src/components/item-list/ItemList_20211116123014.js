import React from "react";
import Item from "../item/Item";
import "./ContainerItems.css";


const ItemList = () => {




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
