import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import "./CartContainer.css";

// CONTENEDOR CARRITO "PADRE"
const CartContainer = () => {
  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } =
    useCartContext();

  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          {cartList.map((prod) => (
            <div key={prod.id}>
              <img src={prod.img} className="w-25" />
              <div>
                <h1>{prod.name}</h1>
                <button
                  onClick={() => eliminarPorItem(prod.id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </div>
              <p>cantidad:{prod.cantidad}</p>
              <p>${prod.precio}</p>
              <h4>el recio total es:{precioTotal()} </h4>
            </div>
          ))}
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
      ) : (
        <>
          <h2>No hay productos en el carrito</h2>
          <Link to="/">Ir a comprar</Link>
        </>
      )}
    </div>
  );
};

export default CartContainer;
