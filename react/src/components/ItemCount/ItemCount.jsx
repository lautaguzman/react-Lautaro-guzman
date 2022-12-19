import { useState } from "react"

const ItemCount = ({ stock = 10, inicial = 1, onAdd }) => {
    const [count, setCount] = useState(inicial)

    const sumar = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }
    const restar = () => {
        if (count > inicial) {
            setCount(count - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(count)
    }
    return (
        <div>
            <p className="alert alert-danger">{count}</p>
            <button className="btn btn-outline-primary" onClick={sumar}>+</button>
            <button className="btn btn-outline-primary" onClick={restar}>-</button>
            <button className="btn btn-outline-success" onClick={handleOnAdd}>Agregar al carrito</button>
        </div >
    )
}

export default ItemCount




