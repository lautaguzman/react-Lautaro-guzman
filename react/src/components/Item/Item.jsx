import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ producto }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={producto.img} />
        <h2>{producto.descripcion}</h2>
        <h4>${producto.precio}</h4>
        <Link to={`/detalle/${producto.id}`}>
          <button>Detalle</button>
        </Link>
      </div>
    </div>
    // <Row>
    //   {Array.from({ length: 1 }).map((_, idx) => (
    //     <Col md={4}>
    //       <Card>
    //         <Card.Img variant="top" src=/>
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
    // <Row>
    //   <Col sm={4}>
    //     <Card style={{ width: "18rem" }} bg={"info"}>
    //       <Card.Img variant="top" src={producto.img} />
    //       <Card.Body>
    //         <Card.Title></Card.Title>
    //         <Card.Text>
    //           Some quick example text to build on the card title and make up the
    //           bulk of the card's content.
    //         </Card.Text>
    //         <Button variant="primary">Go somewhere</Button>
    //       </Card.Body>
    //     </Card>
    //   </Col>
    // </Row>
  );
};

export default Item;

// <div className=" Card">
//   <img src={producto.img} />
//   <div className="Card-Info">
//     <p>{producto.descripcion}</p>
//     <p className="precio"></p>
//     <Link to={`/detalle/${producto.id}`}>
//       <button>Detalle</button>
//     </Link>
//   </div>
// </div>
{
  /* <div className="body">
<div className="contenedor">
  <div>
    <img src={producto.img} />
    <div className="informacion">
      <p>{producto.descripcion}</p>
      <p className="precio">${producto.precio}</p>
      <Link to={`/detalle/${producto.id}`}>
        <button>Detalle</button>
      </Link>
    </div>
  </div>
</div>
</div> */
}

{
  /* <Card style={{ width: "18rem" }} border="black" bg={"danger"}>
<Card.Body>
  <Card.Img variant="top" src={producto.img} />
  <ListGroup variant="flush">
    <ListGroup.Item>{producto.name}</ListGroup.Item>
    <ListGroup.Item>{producto.categoria}</ListGroup.Item>
    <ListGroup.Item>
      {" "}
      <Link to={`/detalle/${producto.id}`}>
        <Button variant="primary">Detalle</Button>
      </Link>
    </ListGroup.Item>
  </ListGroup>
</Card.Body>
</Card> */
}
