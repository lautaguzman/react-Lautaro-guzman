import { useCartContext } from "../../Context/CartContext";

const CartList = () => {
  const { cartList, vaciarCarrito, eliminarPorItem } = useCartContext();
  return cartList.map((prod) => {
    return (
      <div key={prod.id}>
        <button
          variant="secondary"
          onClick={() => eliminarPorItem(prod.id)}
          className="btn btn-danger"
        >
          X
        </button>
        <img src={prod.img} className="w-25" />
        <h3>{prod.descripcion}</h3>
        <p>cantidad:{prod.cantidad}</p>
        <button variant="primary" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>
    );
  });
};

export default CartList;

// <Modal.Dialog key={prod.id}>
//   <Modal.Header>
//     <Modal.Title>Mi Carrito</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     <h1>{prod.descripcion}</h1>
//     <img src={prod.img} />
//
//     <Button
//       variant="secondary"
//       onClick={() => eliminarPorItem(prod.id)}
//       className="btn btn-danger"
//     >
//       X
//     </Button>
//   </Modal.Body>
//   <Modal.Footer>
//     ;
//     <Button variant="primary" onClick={vaciarCarrito}>
//       Vaciar Carrito
//     </Button>
//     <Button>Continuar Compra</Button>
//   </Modal.Footer>
// </Modal.Dialog>
