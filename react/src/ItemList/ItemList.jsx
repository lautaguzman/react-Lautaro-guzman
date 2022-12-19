// 1 LISTADO DE LOS PRODUCTOS
// 2 COMPONENTE HIJO DE LISTcontainer
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const ItemList = ({ productos }) => {
    return (

        productos.map(producto =>
            <Card key={producto.id} style={{ width: '18rem' }}>
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

    )
}
export default ItemList














