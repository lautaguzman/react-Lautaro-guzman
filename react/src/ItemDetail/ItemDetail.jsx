// 1 DETALLE DE LOS PRODUCTOS
// 2 LLAMAR A ITEMCOUNT

import { useCartContext } from "../Context/CartContext";
import { Alert, Card, ListGroup } from "react-bootstrap";
import ItemCount from "../components/ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
const ItemDetail = ({ productos }) => {
  const [isCant, setIsCant] = useState(false);

  const { agregarCarrito } = useCartContext();

  const onAdd = (cantidad) => {
    console.log("la cantidad seleccionada es:", cantidad);
    agregarCarrito({ ...productos, cantidad });
    setIsCant(true);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productos.img} />
      <Card.Body>
        <ListGroup variant="flush">
          <Alert variant="info">
            <ListGroup.Item>{productos.descripcion}</ListGroup.Item>
          </Alert>
          <Alert variant="warning">
            <ListGroup.Item>${productos.precio}</ListGroup.Item>
          </Alert>
        </ListGroup>
      </Card.Body>
      <div>
        {isCant ? (
          <>
            <Link to="/Cart">
              <button className="btn">Ir al carrito</button>
            </Link>
            <Link to="/">
              <button className="btn">Continuar comprando</button>
            </Link>
          </>
        ) : (
          <ItemCount stock={productos.stock} inicial={1} onAdd={onAdd} />
        )}
      </div>
    </Card>
  );
};

export default ItemDetail;
