import { Link} from "react-router-dom";
import CantTotal from "../../components/Cant-Total/Cant-Total";
import CartList from "../../components/CartList/CartList";
import Form from "../../components/Form/Form";
import { useCartContext } from "../../Context/CartContext";
import "./CartContainer.css";

// CONTENEDOR CARRITO "PADRE"
const CartContainer = () => {
  const { cartList } = useCartContext();

  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          <CartList />
          <Form />
          <CantTotal />
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
{
  /* <img src={prod.img} className="w-25" />
              <div>
                <h1>{prod.descripcion}</h1>
                <button
                  onClick={() => eliminarPorItem(prod.id)}
                  className="btn btn-danger"
                >
                  X
                </button>
              </div>
              <p>cantidad:{prod.cantidad}</p> */
}
{
  /* ------------CREAR COMPONENTE CARTLIST------------  */
}
// {/* CREAR COMPONENTE FORMULARIO */}
// {/* <Form /> */}
// {/* -------------form------------ */}
// {/* <button onClick={vaciarCarrito}>Vaciar Carrito</button> */}

// const addOrder = (e) => {
//   e.preventDefault();

//   const order = {};

//   order.buyer = dataForm;
//   order.precio = precioTotal();
//   order.items = cartList.map(({ id, precio, name }) => ({
//     id,
//     precio,
//     name,
//   }));

//   const db = getFirestore();
//   const queryCollection = collection(db, "orders");

//   // -----------INSERTAR----------
//   addDoc(queryCollection, order)
//     .then((resp) => console.log(resp))
//     .catch((err) => console.log(err))
//     .finally(() => vaciarCarrito());

//   // ------ACTUALIZAR- UPDATE---------
//   // const queryDoc = doc(db, "productos", "crkqHWPT7g2GCCUwipu8");
//   // updateDoc(queryDoc, {
//   //   stock: 9,
//   // });

//   // --------BORRADO LOGICO---------
//   // const queryDoc = doc(db, "productos", "YbhYO3CT3aVlejmVn6pE");
//   // updateDoc(queryDoc, {
//   //   isActive: false,
//   // });
// };
// const handleOnChange = (e) => {
//   // console.log("nombre del input:", e.target.name);
//   // console.log("valor del input", e.target.value);
//   setDataForm({
//     ...dataForm,
//     [e.target.name]: e.target.value,
//   });
// };
// console.log(dataForm);
