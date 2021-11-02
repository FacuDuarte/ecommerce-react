import "./ItemCount.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom";

function ItemCount ({stock, inicial}) {
        let [count, setCount] = useState(inicial);

        const increment = () => {
            setCount(count + 1)
        }

        const decrement = () => {
            setCount(count -1)
        }

        return (
            <div className="contador">
                <p id="numero">{count}</p>
                <div>
                    <button id="restar" onClick={decrement}>-</button>
                    <button onClick={increment} disabled={count===stock?true:false}>+</button>
                    {count > 0 && (
                        <Link to="/cart">
                            <button>Agregar al carrito</button>
                        </Link>
                    )}
                    
                </div>
            </div>
        )
}

export default ItemCount