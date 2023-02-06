import { Card, Button, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ producto }) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }} border="dark" className="text-center">
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>{producto.descripcion}</ListGroup.Item>
            <ListGroup.Item>${producto.precio}</ListGroup.Item>
          </ListGroup>
          <Link to={`/detalle/${producto.id}`}>
            <Button variant="primary">Detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Item;
// <div style={{ }} className="col-md-3">
//   <div className="card w-100 mt-5">
//     <div className="card-header">{`${producto.descripcion}`}</div>
//     <div className="card-body">
//       <img src={producto.img} alt="" className="w-50" />${producto.precio}
//     </div>
//     <Link to={`/detalle/${producto.id}`}>
//       <button> Detalle </button>
//     </Link>
//     <div className="card-footer"></div>
//   </div>
// </div>
