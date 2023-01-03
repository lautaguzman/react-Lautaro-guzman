import { Button, Card, CardGroup, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Item.css"
const Item = ({ producto }) => {
    return (
        <Card style={{ width: '18rem' }} border="black" bg={'danger'}  >
            <Card.Body >
                <Card.Img variant="top" src={producto.img} />
                <ListGroup variant="flush">
                    <ListGroup.Item>{producto.name}</ListGroup.Item>
                    <ListGroup.Item>{producto.categoria}</ListGroup.Item>
                    <ListGroup.Item> <Link to={`/detalle/${producto.id}`}><Button variant="primary">Detalle</Button></Link></ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card >
    )
}


export default Item
















