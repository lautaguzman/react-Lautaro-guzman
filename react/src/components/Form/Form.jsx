import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
const Form = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    phone: "",
    direccion: "",
    mensaje: "",
  });
  const { cartList, vaciarCarrito, precioTotal } = useCartContext();
 
  const [errores, setErrores] = useState();

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
  };

  const handleOnChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form className="w-100" onSubmit={addOrder}>
      <label className="form-label">Nombre</label>
      <input
        type="text"
        name="name"
        className="form-control"
        onChange={handleOnChange}
        value={dataForm.name}
      />
      <div className="alert alert-danger p-1">Error en el campo de nombre</div>

      <label className="form-label">Direccion</label>
      <input
        type="text"
        name="direccion"
        className="form-control"
        onChange={handleOnChange}
        value={dataForm.direccion}
      />
      <div className="alert alert-danger p-1">
        Error en el campo de direccion
      </div>

      <label className="form-label">Email</label>
      <input
        type="email"
        name="email"
        className="form-control"
        onChange={handleOnChange}
        value={dataForm.email}
      />
      <div className="alert alert-danger p-1">Error en el campo de email</div>

      <label className="form-label">Numero de Telefono</label>
      <input
        type="text"
        name="phone"
        className="form-control"
        onChange={handleOnChange}
        value={dataForm.phone}
      />
      <div className="alert alert-danger p-1">
        Error en el campo de numero de telefono
      </div>

      <label className="form-label">Mensaje</label>
      <textarea
        className="form-control"
        name="mensaje"
        onChange={handleOnChange}
        value={dataForm.mensaje}
      />
      <div className="alert alert-danger p-1">Error en el campo de mensaje</div>
      <button className="btn btn-warning mt-1 w-100">Terminar Compra</button>
    </form>
  );
};

export default Form;

// ------ACTUALIZAR- UPDATE---------
// const queryDoc = doc(db, "productos", "crkqHWPT7g2GCCUwipu8");
// updateDoc(queryDoc, {
//   stock: 9,
// });

// --------BORRADO LOGICO---------
// const queryDoc = doc(db, "productos", "YbhYO3CT3aVlejmVn6pE");
// updateDoc(queryDoc, {
//   isActive: false,
// });

/*FORMULARIO*/

// <form onSubmit={addOrder}>
//   <input
//     type="text"
//     onChange={handleOnChange}
//     name="name"
//     value={dataForm.name}
//     placeholder="Ingrese su Nombre"
//   />
//   <input
//     type="text"
//     onChange={handleOnChange}
//     name="Direccion"
//     value={dataForm.direccion}
//     placeholder="Ingrese su Direccion"
//   />
//   <input
//     type="text"
//     onChange={handleOnChange}
//     name="phone"
//     value={dataForm.phone}
//     placeholder="Ingrese su Numero"
//   />
//   <input
//     type="text"
//     onChange={handleOnChange}
//     name="email"
//     value={dataForm.email}
//     placeholder="Ingrese su Email"
//   />

//   <button>Terminar compra</button>
// </form>
