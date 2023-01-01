import { useCartContext } from "../../Context/CartContext"

// CONTENEDOR CARRITO "PADRE"
const CartContainer = () => {
    const { cartList, vaciarCarrito } = useCartContext()

    return (
        <div>{cartList.map(prod =>
            <div key={prod.id} >
                <img src={prod.img} className='w-25' />
                {prod.name}
            </div>)}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default CartContainer 