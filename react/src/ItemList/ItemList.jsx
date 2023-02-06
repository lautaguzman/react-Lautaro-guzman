// 1 LISTADO DE LOS PRODUCTOS
// 2 COMPONENTE HIJO DE LISTcontainer
import { Row } from "react-bootstrap";
import Item from "../components/Item/Item";
const ItemList = ({ productos }) => {
  return (
    <Row xs={1} md={3} className="g-4 mt-2">
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </Row>
  );
};
export default ItemList;

// return productos.map((producto) => (
//   <Item key={producto.id} producto={producto} />
// ));
