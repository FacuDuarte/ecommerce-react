import "./ItemCount.css"
import { Link } from "react-router-dom";

function ItemCount ({stock, quantity, setQuantity}) {

        const increment = () => {
            setQuantity(quantity + 1)
        }

        const decrement = () => {
            setQuantity(quantity -1)
        }

        return (
            <div className="contador"> 
                <div>
                    <button id="restar" onClick={decrement}>-</button>
                    <button onClick={increment} disabled={quantity===stock?true:false}>+</button>
                    {quantity > 0 && (      
                        <Link to="/cart">Ir al carrito</Link>
                    )}
                </div>
                <p id="numero">{quantity}</p>
            </div>
        )
}

export default ItemCount