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
            <div className="counter">
                <p id="numero">{quantity}</p>
                <div>
                    <button className="button btn m-2" onClick={decrement}>-</button>
                    <button className="button btn m-2" onClick={increment} disabled={quantity===stock?true:false}>+</button>
                </div>
                {quantity > 0 && (<Link className="button btn" to="/cart">Ir al carrito</Link>)}
            </div>
        )
}

export default ItemCount