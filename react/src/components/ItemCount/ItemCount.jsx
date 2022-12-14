import { useState } from "react"

const ItemCount = () => {
    const [count, setCount] = useState(0)
    const sumar = () => setCount(count + 1)


    const restar = () => setCount(count - 1)


    return (
        <div>
            <p className="alert alert-danger">{count}</p>
            <button className="btn btn-outline-primary" onClick={suma}>+</button>
            <button className="btn btn-outline-primary" onClick={resta}>-</button>
        </div >
    )
}

export default ItemCount