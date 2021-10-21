import "./ItemCount.css"
import React, { useState } from 'react'

function ItemCount ({stock, inicial}) {
        let [count, setCount] = useState(inicial);

        let carrito = []

        const increment = () => {
            setCount(count + 1)
        }

        const decrement = () => {
            setCount(count -1)
        }

        const push = () => {
            carrito.push(count)
            console.log(carrito)
        }

        return (
            <div className="contador">
                <p id="numero">{count}</p>
                <div>
                    <button id="restar" onClick={decrement}>-</button>
                    <button onClick={increment} disabled={count==stock?true:false}>+</button>
                    <button onClick={push}>Agregar al carrito</button>
                </div>
            </div>
        )
}

export default ItemCount