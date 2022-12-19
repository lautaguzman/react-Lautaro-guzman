import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const Item = ({ producto }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={producto.img} />
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                    {producto.categoria}
                </Card.Text>
                <Link to={`/detalle/${producto.id}`}><Button variant="primary">Detalle</Button></Link>
            </Card.Body>
        </Card >
    )
}

export default Item