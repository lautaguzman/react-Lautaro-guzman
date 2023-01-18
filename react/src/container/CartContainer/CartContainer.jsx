import {
  addDoc,
  collection,
  doc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import "./CartContainer.css";

// CONTENEDOR CARRITO "PADRE"
const CartContainer = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { cartList, vaciarCarrito, precioTotal, eliminarPorItem } =
    useCartContext();

  const addOrder = (e) => {
    e.preventDefault();

    const order = {};

    order.buyer = dataForm;
    order.precio = precioTotal();
    order.items = cartList.map(({ id, precio, name }) => ({
      id,
      precio,
      name,
    }));

    const db = getFirestore();
    const queryCollection = collection(db, "orders");

    // -----------INSERTAR----------
    addDoc(queryCollection, order)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito());

    // ------ACTUALIZAR- UPDATE---------
    const queryDoc = doc(db, "productos", "YbhYO3CT3aVlejmVn6pE");
    updateDoc(queryDoc, {
      stock: 100,
    });

    // --------BORRADO LOGICO---------
    // const queryDoc = doc(db, "productos", "YbhYO3CT3aVlejmVn6pE");
    // updateDoc(queryDoc, {
    //   isActive: false,
    // });
  };
  const handleOnChange = (e) => {
    // console.log("nombre del input:", e.target.name);
    // console.log("valor del input", e.target.value);
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  console.log(dataForm);

  return (
    <div>
      {cartList.length !== 0 ? (
        <>
          {/* ------------CREAR COMPONENTE CARTLIST------------  */}
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
              <h4>el precio total es:{precioTotal()} </h4>

              {/* CREAR COMPONENTE FORMULARIO */}

              <form onSubmit={addOrder}>
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="name"
                  value={dataForm.name}
                  placeholder="Ingrese su Nombre"
                />
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="phone"
                  value={dataForm.phone}
                  placeholder="Ingrese su Numero"
                />
                <input
                  type="text"
                  onChange={handleOnChange}
                  name="email"
                  value={dataForm.email}
                  placeholder="Ingrese su Email"
                />
                <button>Terminar compra</button>
              </form>
              {/* -------------form------------ */}
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
